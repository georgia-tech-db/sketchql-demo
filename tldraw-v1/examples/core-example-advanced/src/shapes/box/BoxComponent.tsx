import { SVGContainer, TLShapeUtil } from '@tldraw/core';
import * as React from 'react';
import type { BoxShape } from './BoxShape';
import carSvg from './CarSvg.svg'
import personSvg from './person.svg'

export const BoxComponent = TLShapeUtil.Component<BoxShape, SVGSVGElement>(
  ({ shape, events, isGhost, meta }, ref) => {
    const color = meta.isDarkMode ? 'white' : 'purple';
    const [isEditing, setIsEditing] = React.useState(false);
    const [inputValue, setInputValue] = React.useState(shape.id);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      console.log('Input value changed:', e.target.value);
    };

    const handleInputBlur = () => {
      setIsEditing(false);
      // Update the shape ID with the entered text when the input loses focus
      machine.send('CHANGE_SHAPE_ID', { shapeId: shape.id, newId: inputValue });

      console.log(`Shape ID edited: ${inputValue}`);
    };

    const handleClick = () => {
      if (shape.label === 'car') {
        // If shape label is 'car', set isEditing to true
        setIsEditing(true);
      }
    };

    return (
      <SVGContainer ref={ref} {...events}>
        {/* Inline SVG Circle */}
        <svg width={shape.size[0]} height={shape.size[1]}>
          <circle
            cx={shape.size[0] / 2}
            cy={shape.size[1] / 2}
            r={Math.min(shape.size[0] / 2, shape.size[1] / 2)}
            fill={shape.color}
            stroke={shape.color}
            strokeWidth={3}
            opacity={isGhost ? 0.3 : 1}
            pointerEvents="all"
            onClick={handleClick}
          />
          {shape.label === 'car' && (
            <image
              href={carSvg}
              width={shape.size[0]}
              height={shape.size[1]}
              stroke={color}
              strokeWidth={3}
              strokeLinejoin="round"
              fill="none"
              rx={4}
              opacity={isGhost ? 0.3 : 1}
              pointerEvents="all"
          />
          )}
          {shape.label === 'person' && (
            <image
              href={personSvg}
              width={shape.size[0]}
              height={shape.size[1]}
              stroke={color}
              strokeWidth={3}
              strokeLinejoin="round"
              fill="none"
              rx={4}
              opacity={isGhost ? 0.3 : 1}
              pointerEvents="all"
          />
          )}
        </svg>

        {isEditing ? (
          <div
            style={{
              position: 'absolute',
              top: shape.size[1] + 10,
              left: 0,
              width: shape.size[0],
              height: 30,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <input
              type="text"
              style={{
                flex: 1,
                boxSizing: 'border-box',
                border: `1px solid ${shape.color}`,
                borderRadius: '4px',
                padding: '4px',
                fontSize: '14px',
              }}
              placeholder={shape.id}
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
          </div>
        ) : (
          <text
            x={shape.size[0] / 2}
            y={shape.size[1] + 25}
            dominantBaseline="middle"
            textAnchor="middle"
            fill={shape.color}
            fontSize={25}
            style={{ cursor: 'text' }}
            onClick={() => setIsEditing(true)}
          >
            {shape.label}
          </text>
        )}
      </SVGContainer>
    );
  }
);
