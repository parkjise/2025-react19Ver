import type { SummaryProps } from "./types";
const Summary = ({ checked }: SummaryProps) => {
  return <div>{checked ? "알림을 받습니다." : "알림을 받지 않습니다."}</div>;
};

export default Summary;
