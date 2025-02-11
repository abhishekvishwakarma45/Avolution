import React, { useRef, useState, useEffect } from "react";
import { Fragment } from "react";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { LuPlus } from "react-icons/lu";
import { AiOutlineMinus } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProductPage = () => {
  const [color, setColor] = useState(false);
  const [size, setSize] = useState(false);
  const [active, setActive] = useState(false);
  const [quantity, setQuantity] = useState(0);
  gsap.registerPlugin(ScrollTrigger);
  let current;
  const ImageRef = useRef(null);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (isDesktop) {
      gsap.to(ImageRef.current, {
        scrollTrigger: {
          trigger: ImageRef.current,
          pin: true,
          pinSpacing: false,
          scrub: 2,
          start: "top top",
          end: "+=100%",
        },
      });
    }
    return () => {
      if (ScrollTrigger.getAll()) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <Fragment>
      <div className="grid w-screen h-auto grid-cols-1 px-4 md:px-8 lg:grid-cols-2 lg:px-40 py-5">
        <div ref={ImageRef} className="w-auto h-auto p-5">
          <img
            src="mohamad-khosravi-yMpZJvTEspk-unsplash.jpg"
            alt=""
            className="object-cover w-full max-h-full"
          />
        </div>

        <div className="capitalize sm: py-2 px-4 lg:py-5">
          <p className="my-2 text-xs uppercase">category</p>
          <h1 className="text-2xl font-bold my-1.5">name</h1>
          <p className="my-1 font-extrabold">price</p>
          <span className="my-1 ">& shipping charges</span>
          <p className="my-1 ">desc</p>
          <div className="color-container">
            <button
              className="p-4 my-2 mr-2 text-2xl text-white uppercase bg-black rounded-xs"
              onClick={() => setColor()}
            >
              {color === current ? <IoMdCheckmark /> : ""}
            </button>
          </div>

          <div className="size-container">
            <button
              className={`p-3 my-2 mr-2 text-xs text-white uppercase rounded-sm border-red-400 ${
                active ? "bg-amber-300" : "bg-black"
              }`}
              onClick={() => {
                setSize(current);
                setActive(true);
              }}
            >
              Click Me
            </button>
          </div>
          <hr className="my-4" />
          <div className="flex items-center justify-items-start">
            <button
              className="p-3 mx-2 my-2 text-white uppercase bg-black rounded-xs"
              onClick={() => setQuantity(quantity + 1)}
            >
              <LuPlus />
            </button>
            <p className="mx-2">{quantity}</p>
            <button
              className="p-3 mx-2 my-2 text-white uppercase bg-black rounded-xs"
              onClick={() =>
                setQuantity(quantity > 1 ? quantity - 1 : quantity)
              }
            >
              <AiOutlineMinus />
            </button>
            <button className="p-3 mx-4 text-xs uppercase bg-amber-100 rounded-xs">
              add to cart
            </button>
          </div>
          <hr className="my-4" />
          <div className="my-4">
            <h1 className="font-bold capitalize">Description</h1>
            <hr className="my-4" />
            <p className="my-4">
              Our clothing is crafted from 100% natural materials, ensuring
              comfort and eco-friendliness. Each piece is lightweight,
              breathable, and dyed with environmentally friendly methods. Dress
              with confidence and a clear conscience with our Brand.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, maxime. Quae velit aliquid ipsum, perspiciatis ipsam
              provident praesentium, impedit iste quibusdam maxime quaerat
              libero omnis nesciunt sequi numquam exercitationem laborum.
              Deserunt ea molestias minus, omnis veritatis suscipit labore velit
              recusandae iure corporis aperiam aliquam illum a repudiandae
              laudantium ab, ipsum vitae et nihil laborum ducimus pariatur ut
              tempora est! Voluptas? A maxime deserunt perspiciatis facilis
              suscipit exercitationem corrupti ipsa delectus id, repellat libero
              incidunt consectetur! Magnam quisquam voluptate reiciendis sequi
              doloremque explicabo pariatur adipisci, nihil voluptatum fugit
              blanditiis officia maiores. Ullam sequi consequatur vitae
              molestiae error velit numquam praesentium nostrum optio
              voluptatem, eum ratione maiores accusamus voluptates deleniti
              delectus, minus reiciendis! Officia iste numquam amet laborum! Id
              debitis quisquam ipsum. Distinctio, dignissimos quod quas iure,
              optio perspiciatis ab veniam beatae quos quisquam nisi commodi
              harum nostrum repellat! Harum modi vitae atque neque soluta autem
              in ipsum eveniet, minima blanditiis maiores. Reiciendis modi unde
              illo minus deserunt nobis debitis quasi, perspiciatis accusantium,
              impedit fugiat aut temporibus consequuntur quibusdam ipsam
              quisquam cupiditate ad dolor maiores eligendi vel harum, placeat
              vitae. Doloremque, ullam? Blanditiis repellat aliquid cupiditate.
              Incidunt, repellendus harum ratione recusandae doloribus,
              temporibus omnis iste aut adipisci, quos facere ad odio? Nihil at
              fuga ex laborum earum enim magnam autem, corrupti animi. Sed
              veniam, aliquid labore ipsum ipsam impedit, aut vitae velit
              laudantium unde tempore vel. Est in eos qui aperiam expedita quam
              sed minus similique. Qui tenetur necessitatibus accusantium nobis
              similique. Voluptate laborum nemo corporis laboriosam quis at quo
              obcaecati rerum neque repudiandae sit impedit, officiis, suscipit
              ipsa asperiores est aperiam inventore vero maiores assumenda,
              accusantium doloribus reiciendis consequatur saepe. Quibusdam.
              Excepturi asperiores iusto quidem quibusdam quas aliquam
              voluptatibus consequatur, vero pariatur, ipsam distinctio! Officia
              molestiae quo nesciunt reprehenderit laudantium similique
              temporibus, corporis praesentium accusantium, corrupti deserunt
              quos provident nostrum impedit.
            </p>
            <ul className="flex flex-col justify-center">
              <li className="inline-flex items-center">
                <MdOutlineRadioButtonChecked />
                <p className="mx-2 my-1">100% cotton</p>
              </li>

              <li className="inline-flex items-center">
                <MdOutlineRadioButtonChecked />
                <p className="mx-2 my-1">Light-Weight</p>
              </li>

              <li className="inline-flex items-center">
                <MdOutlineRadioButtonChecked />
                <p className="mx-2 my-1">Eco-Friendly Dye</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
