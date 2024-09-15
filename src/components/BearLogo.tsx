import { useCallback, useEffect, useState } from "react";

const BearLogo = () => {
  const [facePositions, setFacePositions] = useState({
    leftEye: {
      x: 63,
      y: 88,
    },
    rightEye: {
      x: 119,
      y: 88,
    },
    snout: {
      x: 90.5,
      y: 134.5,
    },
    nose: {
      x: 90.5,
      y: 116.5,
    },
    snoutLine: {
      x1: 90.5,
      y1: 122,
      x2: 90.5,
      y2: 139,
    },
    mouth: {
      xOffset: 0,
      yOffset: 0,
    },
  });

  const handleMove = useCallback((clientX: number, clientY: number) => {
    const bearElemenet = document.getElementById("bear");
    if (!bearElemenet) return;

    const rect = bearElemenet.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = clientX - centerX;
    const offsetY = clientY - centerY;

    const maxFaceOffset = 10;
    const faceDistance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
    const faceAngle = Math.atan2(offsetY, offsetX);
    const clampedFaceDistance = Math.min(faceDistance, maxFaceOffset);
    const faceMoveX = clampedFaceDistance * Math.cos(faceAngle);
    const faceMoveY = clampedFaceDistance * Math.sin(faceAngle);

    setFacePositions({
      leftEye: {
        x: 63 + faceMoveX,
        y: 88 + faceMoveY,
      },
      rightEye: {
        x: 119 + faceMoveX,
        y: 88 + faceMoveY,
      },
      snout: {
        x: 90.5 + faceMoveX,
        y: 134.5 + faceMoveY,
      },
      nose: {
        x: 90.5 + faceMoveX,
        y: 116.5 + faceMoveY,
      },
      snoutLine: {
        x1: 90.5 + faceMoveX,
        y1: 122 + faceMoveY,
        x2: 90.5 + faceMoveX,
        y2: 139 + faceMoveY,
      },
      mouth: {
        xOffset: 0 + faceMoveX,
        yOffset: 0 + faceMoveY,
      },
    });
  }, []);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      handleMove(event.clientX, event.clientY);
    },
    [handleMove]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 180 180"
      fill="none"
      id="bear"
    >
      {/* <circle cx="90" cy="90" r="90" fill="js-white" /> */}
      <circle cx="90" cy="111" r="69" fill="#7D510B" />
      <circle cx="134.5" cy="67.5" r="32.5" fill="#7D510B" />
      <circle cx="45.5" cy="67.5" r="32.5" fill="#7D510B" />

      {/* Face */}
      <g>
        <ellipse
          cx={facePositions.leftEye.x}
          cy={facePositions.leftEye.y}
          rx="10"
          ry="12"
          fill="black"
        />
        <ellipse
          cx={facePositions.rightEye.x}
          cy={facePositions.rightEye.y}
          rx="10"
          ry="12"
          fill="black"
        />
        <ellipse
          cx={facePositions.snout.x}
          cy={facePositions.snout.y}
          rx="40.5"
          ry="28.5"
          fill="#E69515"
        />
        <ellipse
          cx={facePositions.nose.x}
          cy={facePositions.nose.y}
          rx="12.5"
          ry="5.5"
          fill="#462900"
        />
        <line
          x1={facePositions.snoutLine.x1}
          y1={facePositions.snoutLine.y1}
          x2={facePositions.snoutLine.x2}
          y2={facePositions.snoutLine.y2}
          stroke="#462900"
          strokeWidth="3"
        />
        <path
          d="M81 143.855C84.1667 140.688 92.9 135.855 102.5 141.855"
          stroke="#462900"
          transform={`translate(${facePositions.mouth.xOffset},${facePositions.mouth.yOffset})`}
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};

export default BearLogo;
