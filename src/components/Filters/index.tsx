import styles from "./Filters.module.css";

type Props = {
  onChange: (value: string) => void;
}

function Filters({ onChange }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  }

  return (
    <div className={styles.Filters}>
      <input
        type="text"
        className={styles.Input}
        placeholder="Filter by title"
        onChange={handleChange}
      />
    </div>
  )
}

export default Filters;
