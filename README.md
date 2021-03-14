# light-hooks

_No description. Just use it_
<br />
[DOCS : https://junyeongchoi.github.io/light-hooks/](https://junyeongchoi.github.io/light-hooks/)

<p align="center">
  <img src="./img/logo.svg">
</p>

## 🛠 Insatll

```
npm install --save light-hooks
```

## 📌 Import

```javascript
import { useDebounce } from "light-hooks";
```

## 📝 Usage (hooks list)

- useDebounce

```javascript
import { useDebounce } from "light-hooks";

const DebounceTest = () => {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const debounced = useDebounce((value) => setDebouncedValue(value), 1500);

  return (
    <>
      <input
        className={styles.input}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          debounced(e.target.value);
        }}
        placeholder="type"
      />
      result: {debouncedValue}
    </>
  );
};

export default DebounceTest;
```

- useOutsideClick

- useThrottle

- useTimer

## LICENSE

MIT
