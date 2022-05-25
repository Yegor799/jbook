import { ResizableBox } from "react-resizable";

interface ResizableProps {
  children: any;
  direction: 'horizontal' | 'vertical';

}

const Resizable: React.FC<ResizableProps> = ({direction, children}) => {
  return <div>{children}</div> 
};

export default Resizable;