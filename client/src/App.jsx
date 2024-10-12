import { Toaster, toast } from 'react-hot-toast';


function App() {
  const clickHandler = () => {
    toast.success("For Checking Purpose");
  };

  return (
    <div>
      <Toaster position="top-center" />
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
}

export default App;
