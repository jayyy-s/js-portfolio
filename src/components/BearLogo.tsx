import { useCallback, useEffect, useState } from "react";

const Bear = () => {
  const initialPositions = {
    positions: {
      leftEye: {
        x: 58.8858,
        y: 73.3369,
      },
      rightEye: {
        x: 124.059,
        y: 73.3369,
      },
      snout: {
        x: 90.8903,
        y: 127.454,
      },
      nose: {
        x: 90.8904,
        y: 106.505,
      },
      snoutLine: {
        x1: 90.8084,
        y1: 112.906,
        x2: 90.8084,
        y2: 132.691,
      },
      mouth: {
        xOffset: 0,
        yOffset: 0,
      },
    },
  };

  const [facePositions, setFacePositions] = useState({
    leftEye: {
      x: initialPositions.positions.leftEye.x,
      y: initialPositions.positions.leftEye.y,
    },
    rightEye: {
      x: initialPositions.positions.rightEye.x,
      y: initialPositions.positions.rightEye.y,
    },
    snout: {
      x: initialPositions.positions.snout.x,
      y: initialPositions.positions.snout.y,
    },
    nose: {
      x: initialPositions.positions.nose.x,
      y: initialPositions.positions.nose.y,
    },
    snoutLine: {
      x1: initialPositions.positions.snoutLine.x1,
      y1: initialPositions.positions.snoutLine.y1,
      x2: initialPositions.positions.snoutLine.x2,
      y2: initialPositions.positions.snoutLine.y2,
    },
    mouth: {
      xOffset: initialPositions.positions.mouth.xOffset,
      yOffset: initialPositions.positions.mouth.yOffset,
    },
  });

  const handleMove = useCallback(
    (clientX: number, clientY: number) => {
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
          x: initialPositions.positions.leftEye.x + faceMoveX,
          y: initialPositions.positions.leftEye.y + faceMoveY,
        },
        rightEye: {
          x: initialPositions.positions.rightEye.x + faceMoveX,
          y: initialPositions.positions.rightEye.y + faceMoveY,
        },
        snout: {
          x: initialPositions.positions.snout.x + faceMoveX,
          y: initialPositions.positions.snout.y + faceMoveY,
        },
        nose: {
          x: initialPositions.positions.nose.x + faceMoveX,
          y: initialPositions.positions.nose.y + faceMoveY,
        },
        snoutLine: {
          x1: initialPositions.positions.snoutLine.x1 + faceMoveX,
          y1: initialPositions.positions.snoutLine.y1 + faceMoveY,
          x2: initialPositions.positions.snoutLine.x2 + faceMoveX,
          y2: initialPositions.positions.snoutLine.y2 + faceMoveY,
        },
        mouth: {
          xOffset: initialPositions.positions.mouth.xOffset + faceMoveX,
          yOffset: initialPositions.positions.mouth.yOffset + faceMoveY,
        },
      });
    },
    [initialPositions.positions]
  );

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      console.log("hi");
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
      <circle cx="90.5" cy="99.5" r="80.5" fill="#7D510B" />
      <circle cx="142.5" cy="49.5" r="37.5" fill="#7D510B" />
      <circle cx="37.5" cy="49.5" r="37.5" fill="#7D510B" />

      <ellipse
        cx={facePositions.leftEye.x}
        cy={facePositions.leftEye.y}
        rx="11.638"
        ry="13.9656"
        fill="black"
      />
      <ellipse
        cx={facePositions.rightEye.x}
        cy={facePositions.rightEye.y}
        rx="11.638"
        ry="13.9656"
        fill="black"
      />
      <ellipse
        cx={facePositions.snout.x}
        cy={facePositions.snout.y}
        rx="47.134"
        ry="33.1684"
        fill="#E69515"
      />
      <ellipse
        cx={facePositions.nose.x}
        cy={facePositions.nose.y}
        rx="14.5475"
        ry="6.40092"
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
        d="M79.8342 138.341C83.5195 134.656 93.6834 129.031 104.856 136.013"
        stroke="black"
        strokeWidth="3"
        transform={`translate(${facePositions.mouth.xOffset},${facePositions.mouth.yOffset})`}
      />
    </svg>
  );
};

export default Bear;
