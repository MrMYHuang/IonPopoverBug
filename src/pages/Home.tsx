import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonPopover, IonButton, IonLabel } from '@ionic/react';
import { useState } from "react";
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => {
          setOpen(true);
        }}>ABC</IonButton>
        <IonPopover isOpen={open} onDidDismiss={() => {setOpen(false)}}>
          <IonLabel>CDE</IonLabel>
        </IonPopover>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
