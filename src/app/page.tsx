"use client";
import Card from "@/components/Card";
import Header from "@/components/Header";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const [chosenTerrain, setChosenTerrain] = useState("");
  const [chosenClimate, setChosenClimate] = useState("");
  const [chosenPopulation, setChosenPopulation] = useState("");
  const [chosenLifestyle, setChosenLifestyle] = useState("");

  const [listPreferences, setListPreference] = useState([]);

  const selectedCard = useMemo(() => {
    switch (currentStep) {
      case 1:
        return chosenTerrain;
      case 2:
        return chosenClimate;
      case 3:
        return chosenPopulation;
      case 4:
        return chosenLifestyle;
    }
  }, [
    currentStep,
    chosenTerrain,
    chosenClimate,
    chosenPopulation,
    chosenLifestyle,
  ]);

  const getListTerrains = async () => {
    const response = await fetch(
      "https://643135423adb159651678329.mockapi.io/terrain"
    );

    if (response.status === 200) {
      const data = await response.json();
      setListPreference(data);
    }
  };

  const getListClimates = async () => {
    const response = await fetch(
      "https://643135423adb159651678329.mockapi.io/climate"
    );

    if (response.status === 200) {
      const data = await response.json();
      setListPreference(data);
    }
  };

  const getListPopulation = async () => {
    const response = await fetch(
      "https://643135423adb159651678329.mockapi.io/climate"
    );

    if (response.status === 200) {
      const data = await response.json();
      setListPreference(data);
    }
  };

  const getListLifestyle = async () => {
    const response = await fetch(
      "https://643135423adb159651678329.mockapi.io/climate"
    );

    if (response.status === 200) {
      const data = await response.json();
      setListPreference(data);
    }
  };

  const onFinalize = () => {
    alert("You have finished setting user's preferences!");
    console.log(
      "User's preferences: ",
      chosenTerrain,
      chosenClimate,
      chosenPopulation,
      chosenLifestyle
    );
    setCurrentStep(1);
    setChosenTerrain("");
    setChosenClimate("");
    setChosenPopulation("");
    setChosenLifestyle("");
  };

  useEffect(() => {
    console.log(currentStep);
    switch (currentStep) {
      case 1:
        getListTerrains();
        break;
      case 2:
        getListClimates();
        break;
      case 3:
        getListPopulation();
        break;
      case 4:
        getListLifestyle();
        break;
      case 5:
        onFinalize();
        break;
    }
  }, [currentStep]);

  return (
    <div>
      <Header
        step={currentStep}
        onNextStep={() => setCurrentStep((currentStep) => currentStep + 1)}
      />
      <div className="flex flex-wrap justify-center p-24">
        {listPreferences.map((preference: any) => (
          <Card
            key={preference.id}
            id={preference.id}
            text={preference.type}
            selected={selectedCard}
            onSelect={(id: string) => {
              switch (currentStep) {
                case 1:
                  setChosenTerrain(id);
                  break;
                case 2:
                  setChosenClimate(id);
                  break;
                case 3:
                  setChosenPopulation(id);
                  break;
                case 4:
                  setChosenLifestyle(id);
                  break;
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}
