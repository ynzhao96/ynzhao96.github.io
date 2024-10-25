import { Button } from "antd";
import "./sider.css";
import { useState } from "react";
import { siderButtonList } from "../../constant/siderButtonList";
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
            setSelected(index);
          }}
        >
          <div
            className="sider-button-content"
            onClick={() => {
              if (button.href) navigate(button.href);
            }}
          >
            {button.title}
          </div>
        </Button>
      ))}
    </>
  );
}
