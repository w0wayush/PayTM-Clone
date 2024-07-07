type Props = {
  value: string;
};

export const Balance = ({ value }: Props) => {
  return (
    <div className="flex px-10 mt-7">
      <div className="font-bold text-lg">Your balance</div>
      <div className="font-semibold ml-4 text-lg ">Rs {value}</div>
    </div>
  );
};

export default Balance;
