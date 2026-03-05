import { useState, useEffect } from 'react';

const LINES = [
    'A midsummer gathering.',
    'A castle by the lake.',
    'An evening where stories quietly begin.',
];

const FONT_SIZE = 48;
const LINE_SPACING = FONT_SIZE * 1.6;
const SVG_WIDTH = 900;
const CHARS_PER_SEC = 12;
const START_DELAY = 0.5;

function HandwritingText() {
    const [lineData, setLineData] = useState(null);
    const [animate, setAnimate] = useState(false);

    // Load font and compute SVG path data for each line
    useEffect(() => {
        import('opentype.js').then(({ default: opentype }) => {
            fetch(`${import.meta.env.BASE_URL}fonts/DancingScript-Regular.ttf`)
                .then(r => r.arrayBuffer())
                .then(buffer => {
                    const font = opentype.parse(buffer);
                    const data = LINES.map((text, i) => {
                        const path = font.getPath(text, 0, FONT_SIZE, FONT_SIZE);
                        const bbox = path.getBoundingBox();
                        const lineWidth = bbox.x2 - bbox.x1;
                        const tx = (SVG_WIDTH - lineWidth) / 2 - bbox.x1;
                        return {
                            d: path.toPathData(2),
                            tx,
                            ty: i * LINE_SPACING,
                        };
                    });
                    setLineData(data);
                });
        });
    }, []);

    // Double rAF ensures the initial clip state is painted before transition starts
    useEffect(() => {
        if (!lineData) return;
        requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    }, [lineData]);

    // Per-line timing: duration proportional to character count
    let cumDelay = START_DELAY;
    const timings = LINES.map(text => {
        const dur = text.length / CHARS_PER_SEC;
        const delay = cumDelay;
        cumDelay += dur + 0.3;
        return { dur, delay };
    });

    const totalHeight = LINES.length * LINE_SPACING + FONT_SIZE * 0.5;

    if (!lineData) return null;

    return (
        <svg
            viewBox={`0 0 ${SVG_WIDTH} ${totalHeight}`}
            style={{
                position: 'absolute',
                top: '36%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                maxWidth: '700px',
                overflow: 'visible',
                pointerEvents: 'none',
            }}
            aria-hidden="true"
        >
            {lineData.map((line, i) => {
                const { dur, delay } = timings[i];
                return (
                    <path
                        key={i}
                        d={line.d}
                        fill="#5c4135"
                        transform={`translate(${line.tx}, ${line.ty})`}
                        style={{
                            clipPath: animate ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
                            transition: animate
                                ? `clip-path ${dur}s linear ${delay}s`
                                : 'none',
                        }}
                    />
                );
            })}
        </svg>
    );
}

export default HandwritingText;
