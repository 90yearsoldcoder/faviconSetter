# faviconSetter

An npm package to set favicon for React

# Install

```
npm i favicon-setter-react
```

# How to use it

```
import useFavicon from "favicon-setter-react"
import icon from "./assets/your-icon"

<!-- In any of your component, but APP component is preferred -->
const APP = () => {
    const {favicon, setFavicon} = useFavicon(icon);

    return (....)
}
```

# Tips

- You may have `const {} = useFavicon(icon)` to avoid lint/ESlint errors if you don't need to change the favicon anymore
- The package is based on DOM query(no stack is used), so conditional race might appear when you change the favicon frequently(like 10 times per second).
