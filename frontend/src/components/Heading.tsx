type Props = {
  label: string;
};

export function Heading({ label }: Props) {
  return <div className="font-bold text-4xl pt-6">{label}</div>;
}

export default Heading;
