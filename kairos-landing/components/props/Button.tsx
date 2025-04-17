type Props = {
  className?: string;
  name?: string;
};
function Button({ className, name }: Props) {
  return (
    <main>
      <section>
        <button className={`${className}`}>{name}</button>
      </section>
    </main>
  );
}

export default Button;
