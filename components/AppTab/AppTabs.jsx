import { useState } from "react";
import { Tab } from "@headlessui/react";
import Comments from "../Comments/Comments";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AppTabs() {
  let [categories] = useState({
    Description: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Shipping: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Comments: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <button
        onClick={() => console.log("clicked")}
        className="bg-blue-500 px-2 py-2 rounded"
      >
        click me
      </button>
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 ">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-gray-700 ",
                  "",

                  selected
                    ? " border-b-2 border-black text-black"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-black hover:font-bold"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel>
            <h2 className="font-semibold  text-xl mb-4">Description </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              tempore cum unde voluptatum id nam. Iusto qui similique doloremque
              ducimus iure a molestiae nam? Atque ex deserunt magnam dolore ut.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto in assumenda error esse et culpa incidunt repudiandae
              velit molestias vitae earum qui sapiente distinctio non quae neque
              eveniet, possimus accusantium. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Temporibus ipsum magni ipsa tempora
              pariatur sequi. Ad pariatur libero in optio voluptas neque!
              Numquam at perferendis, aspernatur accusamus placeat voluptatibus
              suscipit.
            </p>
          </Tab.Panel>
          <Tab.Panel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              tempore cum unde voluptatum id nam. Iusto qui similique doloremque
              ducimus iure a molestiae nam? Atque ex deserunt magnam dolore ut.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto in assumenda error esse et culpa incidunt repudiandae
              velit molestias vitae earum qui sapiente distinctio non quae neque
              eveniet, possimus accusantium. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Temporibus ipsum magni ipsa tempora
              pariatur sequi. Ad pariatur libero in optio voluptas neque!
              Numquam at perferendis, aspernatur accusamus placeat voluptatibus
              suscipit.
            </p>
          </Tab.Panel>
          <Tab.Panel>
            <Comments />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
