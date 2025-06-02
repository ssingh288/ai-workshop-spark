
interface AnimatedBlobProps {
  color: string;
  size: string;
  position: string;
  delay?: string;
}

const AnimatedBlob = ({ color, size, position, delay = '0s' }: AnimatedBlobProps) => {
  return (
    <div
      className={`absolute ${position} ${size} ${color} rounded-full opacity-60 animate-blob`}
      style={{ animationDelay: delay }}
    />
  );
};

export default AnimatedBlob;
