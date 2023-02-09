import Card from "./Card";
export default function CardsPage() {
  const cards = [
    {
      title: "Mount Fuji",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit ex tellus, ullamcorper molestie lacus sodales id. Duis et tortor eget quam ultricies aliquam non vitae massa. Quisque tristique, nisl a sollicitudin aliquet, diam tellus fringilla leo, et posuere odio nunc non lorem.",
      href: "#",
      imgAlt: "Picture of Mount Fuji in Japan.",
      imgSrc:
        "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];

  return (
    <div className=" flex justify-center p-5 w-full h-screen bg-slate-500 overflow-hidden overscroll-contain">
      {cards.map((card) => {
        return (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            imgSrc={card.imgSrc}
            href={card.href}
          />
        );
      })}
    </div>
  );
}
