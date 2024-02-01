import ChatBar, { ChatbarProps } from "./ChatBar";

const DateDivider = ({ date }: { date: string }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#F8F8F8] w-max py-1 px-4 text-[#8a8a8a] rounded-md">
        {date}
      </div>
    </div>
  );
};

const ContainerChat = ({ data }: { data: ChatbarProps[] }) => {
  const getDividerText = (timestamp: number) => {
    const messageDate = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (messageDate.toDateString() === today.toDateString()) {
      return "Today";
    } else if (messageDate.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else {
      return messageDate.toLocaleDateString();
    }
  };

  const renderedMessages: any = [];
  let lastData = "";

  data.map((data: ChatbarProps) => {
    const currentDate = getDividerText(data.date);
    if (currentDate !== lastData) {
      renderedMessages.push(<DateDivider key={data.date} date={currentDate} />);
      lastData = currentDate;
    }
    renderedMessages.push(<ChatBar key={data.id} data={data} />);
  });

  return <div className="flex flex-col gap-2">{renderedMessages}</div>;
};

export default ContainerChat;
