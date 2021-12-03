import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { FC } from "react";
import { useNavigate } from "react-router";
const Home: FC = () => {
  let navigate = useNavigate();
  const topics = ["React"];
  return (
    <div>
      <div className="p-grid p-justify-center">
        <div className="p-col-8">
          <div className="p-grid">
            {topics.map((t) => {
              let footer = (
                <>
                  <Button
                    label="Start quiz!"
                    onClick={() => navigate("/quiz/" + t)}
                  />
                </>
              );
              return (
                <div className="p-col-3" key={t}>
                  <Card title={t} className="p-m-2" footer={footer} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
