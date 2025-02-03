import React from "react";
import Container from "./Container.component";

type ItemType = { title: string; description: string };

const ITEMS: ItemType[] = [
  {
    title: "Track company-wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    title: "Advanced built-in reports",
    description:
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    title: "Everything you need in one place",
    description:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

type ItemComponentType = ItemType & { index: string };

const ItemMobile: React.FC<ItemComponentType> = ({
  index,
  title,
  description,
}) => {
  return (
    <li className="block lg:hidden">
      <Container className="pe-0">
        <div className="flex flex-col space-y-2">
          <div className="bg-orange-500/10 rounded-l-full flex items-center">
            <div className="bg-orange-500 rounded-full px-6 py-1 w-max text-white font-semibold">
              {index}
            </div>
            <div className="text-left pl-4 font-semibold text-blue-950">
              {title}
            </div>
          </div>
          <p className="text-left text-gray-400 text-sm leading-6">
            {description}
          </p>
        </div>
      </Container>
    </li>
  );
};

const ItemDesktop: React.FC<ItemComponentType> = ({
  index,
  title,
  description,
}) => {
  return (
    <li className="hidden lg:block">
      <div className="grid grid-cols-[70px_1fr] gap-y-4 gap-x-5">
        <div className="bg-orange-500 rounded-full px-6 py-1 w-max text-white font-semibold col-start-1 col-end-2">
          {index}
        </div>
        <div className="text-left self-center font-semibold text-blue-950 col-start-2 col-end-3">
          {title}
        </div>
        <p className="text-left text-gray-400 col-start-2 col-end-3">
          {description}
        </p>
      </div>
    </li>
  );
};

const Item: React.FC<ItemComponentType> = ({ index, title, description }) => {
  return (
    <>
      <ItemMobile index={index} title={title} description={description} />
      <ItemDesktop index={index} title={title} description={description} />
    </>
  );
};

const Info: React.FC = () => {
  return (
    <Container className="px-0">
      <div className="flex flex-col items-center text-center space-y-16 lg:flex-row lg:items-start lg:text-left">
        <div className="px-10 space-y-5 lg:basis-0 lg:grow lg:ps-0">
          <h2 className="text-4xl font-bold text-blue-950 leading-12">
            What's different about Manage?
          </h2>
          <p className="text-gray-400 leading-7">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <ul className="space-y-8 lg:basis-0 lg:grow">
          {ITEMS.map((item, i) => (
            <Item
              key={`${item.title} ${i}`}
              index={("0" + (i + 1)).slice(-2)}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Info;
