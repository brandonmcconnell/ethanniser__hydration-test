import { connection } from 'next/server'

export async function SecondHand({ secondRotation }: { secondRotation: number }) {
  await connection();
  const time = new Date();
  const secondRotationFallback = time.getSeconds() * 6 + time.getMilliseconds() * 0.006;

  return (
    <line
      x1="50"
      y1="50"
      x2="50"
      y2="10"
      stroke="red"
      strokeWidth="1"
      transform={`rotate(${secondRotation ?? secondRotationFallback}, 50, 50)`}
      style={{ transition: "transform 0.1s linear" }}
    />
  )
}