import { Button } from "antd";
import "./sider.css";
import { useState } from "react";
import { siderButtonList } from "../../constants/siderButtonList";
import { useNavigate } from "react-router-dom";

export default function Sider() {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      {siderButtonList.map((button, index) => (
        <Button
          key={index}
          className="sider-button"
          color={index === selected ? "primary" : "default"}
          variant={index === selected ? "filled" : "text"}
          onClick={() => {
            if (button.href) navigate(button.href);
            setSelected(index);
          }}
        >
          <div className="sider-button-content">{button.title}</div>
        </Button>
      ))}
    </>
  );
}
