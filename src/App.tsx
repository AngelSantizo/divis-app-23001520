import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonItem, IonInput, IonLabel, IonText, IonFooter, setupIonicReact } from '@ionic/react';
import { useState } from 'react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const [quetzales, setQuetzales] = useState<number>(0);
  const exchangeRate = 8; // tomaremos como ejemplo que por cada 8 quetzales 1 dolar
  
  const handleInputChange = (e: CustomEvent) => {
    const value = parseFloat((e.target as HTMLInputElement).value) || 0;
    setQuetzales(value);
  };

  const usdAmount = (quetzales/exchangeRate).toFixed(2);

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary" className="ion-text-center">
          <IonTitle>DivisApp 23001520</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          maxWidth: '600px',
          margin: '0 auto',
          padding: '20px'
        }}>
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol size="12" sizeMd="8" sizeLg="6">
                <IonItem>
                  <IonInput 
                    type="number"
                    label="Cantidad en quetzales"
                    labelPlacement="floating"
                    onIonInput={handleInputChange}
                    value={quetzales}
                    className="ion-text-center"
                    inputmode="decimal"
                    style={{
                      '--padding-start': '10px',
                      '--padding-end': '10px',
                      'width': '100%',
                      'margin': '10px 0'
                    }}
                  >
                    <IonText slot="end" color="medium" style={{ marginLeft: '8px' }}>GTQ</IonText>
                  </IonInput>
                </IonItem>
                
                <IonItem lines="none" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  marginTop: '20px',
                  '--background': 'transparent'
                }}>
                  <IonLabel>
                    <h2>Equivalente en dólares:</h2>
                    <div style={{
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      color: 'var(--ion-color-primary)',
                      margin: '10px 0'
                    }}>
                      ${usdAmount} USD
                    </div>
                    <IonText color="medium">Tipo de cambio: 1 USD = Q{exchangeRate} GTQ</IonText>
                  </IonLabel>
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>

      <IonFooter>
        <IonToolbar style={{textAlign: 'center', fontWeight: 'bold'}}>
          <IonTitle color="primary">Angel Santizo 23001520</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonApp>
  );
}

export default App;
