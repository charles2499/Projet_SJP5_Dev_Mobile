import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList, Alert} from 'react-native';
import Dialog from "react-native-dialog";
import DialogInput from 'react-native-dialog/lib/Input';
// import FlatListBasics from './assets/classes/FlatListBasics'

//Ici nous declarons la fonction anonyme qui sera afficher comme resultat de notre application
//Nous l'appellerons AppTest
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.flatListItem, textColor]}>{item.text}</Text>
  </TouchableOpacity>
);

const AppTest = () => {
   /* Ici le modifications*/
   const [monChoix, setMonChoix] = useState(null);
   const [modifText, onChangeModifText] = useState("");
//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////enter un mot right/////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
  const [visible, setVisible] = useState(false);
  const [motTemp, setMotTemp] = useState('');
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const showDialog = () => {
    setVisible(true);
  };

  const annulerMot = () => {
    setVisible(false);
  };

  const ajouterMot = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
    setData(listActuelle => [...listActuelle, {id: data.length.toString(), text: motTemp}]);
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#696969" : "lightsteelblue";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          setMonChoix(item.id);
          onChangeModifText(data[item.id].text);
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////modifier un mot right//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
const [visibleM, setVisibleM] = useState(false);

const showDialogM = () => {
  setVisibleM(true);
};

const annulerMotM = () => {
  setVisibleM(false);
};

const modifierMot = () => {
  // The user has pressed the "Delete" button, so here you can do your own logic.
  // ...Your logic
  data[monChoix].text = modifText;
  setData(data);
  setVisibleM(false);
};

//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////retirer un mot right//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

const [visibleR, setVisibleR] = useState(false);

const showDialogR = () => {
  setVisibleR(true);
};

const annulerMotR = () => {
  setVisibleR(false);
};

const retirerMot = () => {
  // The user has pressed the "Delete" button, so here you can do your own logic.
  // ...Your logic
  data[monChoix].text = '';
  setData(data);
  setVisibleR(false);
};

/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////enter un mot left/////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
const [monChoix1, setMonChoix1] = useState(null);
const [modifText1, onChangeModifText1] = useState("");
const [visible1, setVisible1] = useState(false);
const [motTemp1, setMotTemp1] = useState('');
const [data1, setData1] = useState([]);
const [selectedId1, setSelectedId1] = useState(null);

const showDialog1 = () => {
  setVisible1(true);
};

const annulerMot1 = () => {
  setVisible1(false);
};

const ajouterMot1 = () => {
  // The user has pressed the "Delete" button, so here you can do your own logic.
  // ...Your logic
  setVisible1(false);
  setData1(listActuel => [...listActuel, {id: data1.length.toString(), text: motTemp1}]);
};

const renderItem1 = ({ item }) => {
  const backgroundColor = item.id === selectedId1 ? "#696969" : "lightsteelblue";
  const color = item.id === selectedId1 ? 'white' : 'black';

  return (
    
    <Item
      item={item}
      onPress={() => {
        setSelectedId1(item.id);
        setMonChoix1(item.id);
        onChangeModifText1(data1[item.id].text);
      }}
      backgroundColor={{ backgroundColor }}
      textColor={{ color }}
    />
  );
};

//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////modifier un mot left//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
const [visibleM1, setVisibleM1] = useState(false);

const showDialogM1 = () => {
  setVisibleM1(true);
};

const annulerMotM1 = () => {
  setVisibleM1(false);
};

const modifierMot1 = () => {
  // The user has pressed the "Delete" button, so here you can do your own logic.
  // ...Your logic
  data1[monChoix1].text = modifText1;
  setData1(data1);
  setVisibleM1(false);
};

//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////retirer un mot left//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

const [visibleR1, setVisibleR1] = useState(false);

const showDialogR1 = () => {
  setVisibleR1(true);
};

const annulerMotR1 = () => {
  setVisibleR1(false);
};

const retirerMot1 = () => {
  // The user has pressed the "Delete" button, so here you can do your own logic.
  // ...Your logic
  data1[monChoix1].text = '';
  setData1(data1);
  setVisibleR1(false);
};

//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////Gauche vers Droite ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
const gaucheVersDroite = () => {
  let gVd = data1[monChoix1].text;
  setData(listActuelle => [...listActuelle, {id: data.length.toString(), text: gVd}]);
  data1[monChoix1].text = '';
  setData1(data1);
};

//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////Droite vers Gauche ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
const droiteVersGauche = () => {
  let dVg = data[monChoix].text;
  setData1(listActuelle => [...listActuelle, {id: data1.length.toString(), text: dVg}]);
  data[monChoix].text = '';
  setData(data);
};
   ////////////////////////////////////////////////////////////////////////////////////////
   ///////////////////////////////////////////////////////////////////////////////////////////
  return(
    <View style={styles.principal}>
      {/*
      Ceci est le composant principale de notre application.
      Il contiendra toutes les parties et sous parties de cette application
      son identifiant sera "principal"
      */}

      {/*/////////////////////// Debut de l'en-tête l'application////////////////////////////////*/}

      <View style={styles.header}>
        {/*
        Cette partie contiendra l'en-tête de notre application
        Cette derniere sera formée uniquement du titre de l'aplication
        "Projet SJP5"
        son identifiant sera "header"
        */}
        <Text style={styles.title}>Projet SJP5 🎉</Text>
      </View>

      {/*/////////////////////// Debut du corps de l'application/////////////////////////////////*/}

      <View style={styles.body}>
        {/*
        Cette partie contiendra tout le corps de notre application.
        Nous y trouverons plus particulierement les codes des différents blocs de l'application,
        des différentes fonctions qui s'exécuterons lorsqu'on cliquera sur tel ou tel bouton.
        Son identifiant sera "body"
        */}
        <View style={styles.left}>
          {/*Cette partie contiendra les codes des parties constituants la partie
          gauche du corps de l'application*/}
          <View style={[styles.textContent, {borderColor: 'dimgray',}]}>
            {/*Cette partie contient le code de la zone d'affichage du coté gauche de l'application*/}

            {/* ici est le code de la flatlist */}
            <FlatList
              data={data1}
              renderItem={renderItem1}
            />

          </View>

          <View style={styles.btnContent}>
            {/*Cette parie contient le code des boutons de la partie gauche de l'application*/}

            <View style={styles.btnView}>
              {/*le boutton ajouter*/}
              <TouchableOpacity onPress={showDialog1}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*le boutton modifier*/}
              <TouchableOpacity onPress={showDialogM1}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>m</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*le boutton retirer*/}
              <TouchableOpacity onPress={showDialogR1}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.center}>
          {/*Cette parie contient le code des boutons du centre de l'application*/}
          <View style={styles.centerBtnView1}>
              {/*le boutton ajouter*/}
              <TouchableOpacity onPress={gaucheVersDroite}>
                <Text style={{fontSize: 30, color: 'dimgray'}}>{">>"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.centerBtnView2}>
              {/*le boutton modifier*/}
              <TouchableOpacity onPress={droiteVersGauche}>
                <Text style={{fontSize: 30, color: 'dimgray'}}>{"<<"}</Text>
              </TouchableOpacity>
            </View>

        </View>

        <View style={styles.right}>
          {/*Cette partie contiendra les codes des parties constituants la partie
          droite du corps de l'application*/}
          <View style={[styles.textContent, {borderColor: 'dimgray',}, styles.flatListContainer]}>
            {/*Cette partie contient le code de la zone d'affichage du coté droit de l'application*/}

            {/* ici est le code de la flatlist */}
            <FlatList
              data={data}
              renderItem={renderItem}
            />
          </View>

          <View style={styles.btnContent}>
            {/*Cette parie contient le code des boutons de la partie droite de l'application*/}

            <View style={styles.btnView}>
              {/*le boutton ajouter*/}
              <TouchableOpacity onPress={showDialog}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*le boutton modifier*/}
              <TouchableOpacity onPress={showDialogM}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>m</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              {/*le boutton retirer*/}
              <TouchableOpacity onPress={showDialogR}>
                <Text style={{fontSize: 50, color: 'dimgray'}}>-</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>

      {/*/////////////////////// Debut du bas de l'application/////////////////////////////////*/}

      <View style={styles.footer}>
        {/*
        Cette partie contiendra le bas de l'application.
        Elle ne contiendra que les informations de l'application et celles du developpeur
        */}
        <Text style={styles.message}>Projet SJP5 V 0.0.1</Text>
        <Text style={styles.message}>fait à Douala le 14 Novembre 2021</Text>
        <Text style={styles.message}>par Charles Nzie Nsaba </Text>
        <Text style={styles.message}>email: cnzie@univ-catho-sjd.com</Text>

      </View>

      {/*Boite de dialogue Ajouter droit*/}
      <Dialog.Container visible={visible}>
        <Dialog.Title>Ajouter un mot</Dialog.Title>
        <Dialog.Description>
          Ajouter votre mot ici.
        </Dialog.Description>
        <DialogInput 
          placeholder="votre mot ici!"
          onChangeText = {setMotTemp}
        />
        <Dialog.Button label="Annuler" onPress={annulerMot} />
        <Dialog.Button label="Ajouter" onPress={ajouterMot} />
      </Dialog.Container>

      {/* ////////////////////////////////////////////////////////////////////////////////////////
     ///////////////////////////////////////////////////////////////////////////////////////// */}
    {/*Boite de dialogue modifier droit*/}
    <Dialog.Container visible={visibleM}>
        <Dialog.Title>Modifier un mot</Dialog.Title>
        <Dialog.Description>
          Modifier votre mot ici.
        </Dialog.Description>
        <DialogInput 
          // placeholder="votre mot ici!"
          onChangeText = {onChangeModifText}
          value={modifText}
        />
        <Dialog.Button label="Annuler" onPress={annulerMotM} />
        <Dialog.Button label="Modifier" onPress={modifierMot} />
    </Dialog.Container>

     {/* ////////////////////////////////////////////////////////////////////////////////////////
     ///////////////////////////////////////////////////////////////////////////////////////// */}
    {/*Boite de dialogue effacer droit*/}
    <Dialog.Container visible={visibleR}>
        <Dialog.Title>Effacer un mot</Dialog.Title>
        <Dialog.Description>
          Voulez vous vraiment effacer ce mot?
        </Dialog.Description>
        <Dialog.Button label="Non" onPress={annulerMotR} />
        <Dialog.Button label="OUi" onPress={retirerMot} />
    </Dialog.Container>

    {/* ////////////////////////////////////////////////////////////////////////////////////////
     ///////////////////////////////////////////////////////////////////////////////////////// */}

    {/*Boite de dialogue Ajouter gauche*/}
    <Dialog.Container visible={visible1}>
        <Dialog.Title>Ajouter un mot</Dialog.Title>
        <Dialog.Description>
          Ajouter votre mot ici.
        </Dialog.Description>
        <DialogInput 
          placeholder="votre mot ici!"
          onChangeText = {setMotTemp1}
        />
        <Dialog.Button label="Annuler" onPress={annulerMot1} />
        <Dialog.Button label="Ajouter" onPress={ajouterMot1} />
      </Dialog.Container>

    {/* ////////////////////////////////////////////////////////////////////////////////////////
     ///////////////////////////////////////////////////////////////////////////////////////// */}
    {/*Boite de dialogue modifier gauche*/}
    <Dialog.Container visible={visibleM1}>
        <Dialog.Title>Modifier un mot</Dialog.Title>
        <Dialog.Description>
          Modifier votre mot ici.
        </Dialog.Description>
        <DialogInput 
          // placeholder="votre mot ici!"
          onChangeText = {onChangeModifText1}
          value={modifText1}
        />
        <Dialog.Button label="Annuler" onPress={annulerMotM1} />
        <Dialog.Button label="Modifier" onPress={modifierMot1} />
    </Dialog.Container>

    {/* ////////////////////////////////////////////////////////////////////////////////////////
     ///////////////////////////////////////////////////////////////////////////////////////// */}
    {/*Boite de dialogue effacer droit*/}
    <Dialog.Container visible={visibleR1}>
        <Dialog.Title>Effacer un mot</Dialog.Title>
        <Dialog.Description>
          Voulez vous vraiment effacer ce mot?
        </Dialog.Description>
        <Dialog.Button label="Non" onPress={annulerMotR1} />
        <Dialog.Button label="OUi" onPress={retirerMot1} />
    </Dialog.Container>
    </View>
  );
}


/*
Cette partie ne traite que de la mise en forme des différents composants de l'application
*/

const styles = StyleSheet.create({

  /* Mise en forme du composant principal */

  principal: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#040E14',
    flexDirection: "column"
  },

  /* Mise en forme de l'en-tête de l'application */
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderWidth: 3,
    borderColor: 'dimgray',
    paddingLeft: 20,
    paddingRight: 20,
    color: 'dimgray',
  },

  /* Mise en forme du corps de l'application */

  body: {
    flex: 8,
    flexDirection: "row",
  },
  right:{
    flex: 5,
  },
  center: {
    flex: 1.5,
  },
  left: {
    flex: 5,
  },
  flatListItem: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  //Cette partie se consacre aux sous partie contenue dans les blocs gauche et 
  //droit de l'application

  textContent:{
    flex: 8,
    // borderColor: "blue",
    borderWidth: 2,
    borderRadius: 10,
  },
  btnContent:{
    flex: 1,
    marginTop: 1,
    flexDirection: 'row'
  },
  btnView:{
    flex: 1,
    borderWidth: 1,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: -10,
    borderRadius: 20,
    borderColor: 'dimgray',
  },
  centerBtnView1:{
    borderWidth: 1,
    margin: 1,
    marginTop: 200,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: -10,
    borderColor: 'dimgray',
  },
  centerBtnView2:{
    borderWidth: 1,
    margin: 1,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: -10,
    borderColor: 'dimgray',
  },
  item: {
    marginVertical: 1,
    marginHorizontal: 1,
  },

  /* Mise en forme du bas de l'application */

  footer: {
    flex: 0.8,
    paddingTop: 5,
    paddingLeft: 5,
  },
  message: {
    fontSize: 10,
    color: 'dimgray',
  },

});

/* Ici nous demandons l'exportation de l'application pour l'execution dans un terminal */
export default AppTest;