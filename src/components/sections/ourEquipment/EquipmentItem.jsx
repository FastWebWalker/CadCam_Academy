export default function EquipmentItem({ image, title }) {
  return (
    <article className="flex flex-col items-center gap-[16px]">
      <div className="w-[257px] h-auto">
        <img src={image} alt={title} />
      </div>
      <h3 className="text-[24px]">{title}</h3>
    </article>
  );
}
