---
layout: layouts/post.njk
title: React Hooks
featuredImage: https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png
date: 2024-09-29T14:07:00.000Z
description: Hooks were added to React in version 16.8. In this article I will
  look at each type of hook and give some examples of how and when they should
  be used.
---
## Commonly used Reat hooks:

- useState
- useEffect
- useContext
- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

## useState
`useState` is used to add state to functional components. It returns an array with two elements: the current state value and a function to update it.

```
const [count, setCount] = useState(0);
```

`count` is the current state value which is initalised to 0 then updated by the `setCount` function each time the button is clicked. The value of `count` is shown in the HTML component which re-renders each  time the button is clicked.

```
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## useEffect
`useEffect` is used for side effects in functional components. It runs after every render and can be used for data fetching, subscriptions, or manually changing the DOM.

```
useEffect(() => {
  document.title = `You clicked ${count} times`;
});
```

Some data is fetched from a the URL. This data is then parsed and added to `data` using the `setData` function. The empty dependency array `[]` used as the second argument to `useEffect` means this effect runs only once when the component mounts. This is useful for one-time setup like data fetching or subscriptions If no dependency array is specified, the effect runs after every render, but be careful as this can lead to performance issues if the [effect is expensive](https://gitnation.com/contents/the-worlds-most-expensive-react-component-and-how-to-stop-writing-it). The array can also contain dependencies and the effect will only run when any of these dependencies change.

```
function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>{data ? <DisplayData data={data} /> : 'Loading...'}</div>
  );
}
```

## useContext
`useContext` is used to consume context in functional components. It allows you to subscribe to React context without introducing nesting.

```
const value = useContext(MyContext);
```

A context is created with `React.createContext('light')`, setting 'light' as the default value. The current theme value is accessed in the `ThemedButton` component and the component is conditionally styled. The button is styled based on a theme defined higher up in the component tree without passing props through every level.

```
const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme === 'light' ? '#fff' : '#000' }}>
      I'm styled based on the theme context
    </button>
  );
}
```

## useReducer
`useReducer` is an alternative to `useState` for managing complex state logic. It's often preferable to `useState` when you have complex state logic that involves multiple sub-values.

```
const [state, dispatch] = useReducer(reducer, initialState);
```

The `todoReducer` function specifies how the state should change in response to different actions. `useReducer` is used to create the state and dispatch function. The initial state is an empty array. `handleAddTodo` dispatches an 'ADD_TODO' action with the new todo text. `handleToggleTodo` dispatches a 'TOGGLE_TODO' action with the id of the todo to toggle. The reducer function then updates the state based on these actions.

```
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  function handleAddTodo(text) {
    dispatch({ type: 'ADD_TODO', text });
  }

  function handleToggleTodo(id) {
    dispatch({ type: 'TOGGLE_TODO', id });
  }

  // Render todos and add todo form...
}
```

## useCallback
`useCallback` returns a memoized version of the callback that only changes if one of the dependencies has changed. It's useful for optimizing performance by preventing unnecessary re-renders of child components.

```
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

The `ParentComponent` renders a `ChildComponent` and a button.  `useCallback` memoises (caches) the `expensiveComputation` function to prevent unnecessary re-creations. It is only recreated if `value` changes. The "Increment" button updates count, but doesn't cause `expensiveComputation` to be recreated.

```
function ParentComponent({ value }) {
  const [count, setCount] = useState(0);

  const expensiveComputation = useCallback(() => {
    console.log('Computing...');
    return value * 2;
  }, [value]);

  return (
    <div>
      <ChildComponent compute={expensiveComputation} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## useMemo
`useMemo` is used to memoize expensive computations so that they are only re-run when dependencies change. It can help optimize performance by avoiding unnecessary calculations.

```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

The filtering operation on `items` might be expensive if there are many items. `useMemo` is used to memoize the result of the filtering operation. The filtered list is only recalculated when `items` or `filterCriteria` change, improving performance.

```
function FilteredList({ items, filterCriteria }) {
  const filteredItems = useMemo(() => {
    return items.filter(item => item.matches(filterCriteria));
  }, [items, filterCriteria]);

  return (
    <ul>
      {filteredItems.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
}
```

## useRef
`useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument. It's commonly used to access DOM elements directly or to persist values across renders without causing re-renders.

```
const inputRef = useRef(null);
```

`useRef(null)` creates a ref which is attached to the input element using the `ref` attribute. In the `handleClick` function, the actual DOM node is accessed via `inputRef.current`. The `focus()` method is called on the input element when the button is clicked. This allows interaction with the DOM elements in a way that is safe in React.

```
function TextInputWithFocusButton() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
```

## useImperativeHandle
`useImperativeHandle` customizes the instance value that is exposed to parent components when using `ref`. It's used with `forwardRef` to customize the exposed ref.

```
useImperativeHandle(ref, () => ({
  focus: () => {
    // Custom focus implementation
  }
}));
```

Create a `FancyInput` component using `forwardRef` to allow it to receive a ref from its parent. An `inputRef` is created inside to attach to the actual input element. `useImperativeHandle` is used to customize what the parent sees when it uses the ref. `focus` and `scrollIntoView` methods are exposed which allows the parent component to call these methods on the `FancyInput` component, giving a controlled way to interact with the internal DOM node.

```
const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    scrollIntoView: () => {
      inputRef.current.scrollIntoView();
    }
  }));

  return <input ref={inputRef} {...props} />;
});
```

## useLayoutEffect
`useLayoutEffect` is similar to `useEffect`, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render.

```
useLayoutEffect(() => {
  // Perform DOM measurements here
}, []);
```

The `Tooltip` component needs to position its tooltip based on the size and position of its children. A `ref` allows access to the DOM node of the children. In the `useLayoutEffect`, the size and position of this node is measured using `getBoundingClientRect()`. These measurements are used to set the position of the tooltip. `useLayoutEffect` runs synchronously after DOM mutations but before the browser paints, ensuring the tooltip is positioned correctly before it's displayed.

```
function Tooltip({ children, tooltip }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef();

  useLayoutEffect(() => {
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    setPosition({
      x: left + width / 2,
      y: top + height
    });
  }, []);

  return (
    <>
      <div ref={ref}>{children}</div>
      <div style={{ position: 'absolute', left: position.x, top: position.y }}>
        {tooltip}
      </div>
    </>
  );
}
```

## useDebugValue
`useDebugValue` can be used to display a label for custom hooks in React DevTools. It's primarily for debugging purposes.

```
useDebugValue(value);
```

Here, `useDebugValue` is used to provide a label for this hook in [React DevTools](https://react.dev/learn/react-developer-tools). The label will show either "Online" or "Offline" based on the `isOnline` state. This helps us understand the current state of the hook when debugging.

```
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // ...

  useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}
```
