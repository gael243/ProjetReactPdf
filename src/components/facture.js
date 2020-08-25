import React,{Fragment} from 'react'
import { Page, Document, Image, StyleSheet,View,Text } from '@react-pdf/renderer';
import logo from '../images/logos1.jpeg';

 const Facture = () => {
    const borderColor = '#90e5fc';
    const styles=StyleSheet.create({
        page: {
            fontFamily: 'Helvetica',
            fontSize: 11,
            paddingTop: 30,
            paddingLeft:60,
            paddingRight:60,
            lineHeight: 1.5,
            flexDirection: 'column',
        },
        logo:{
            width:80,
            height:80,
            marginLeft:180
        },
        titleContainer:{
            flexDirection: 'row',
            marginTop: 24,
        },
        reportTitle:{
            color: '#61dafb',
            letterSpacing: 4,
            fontSize: 25,
            textAlign: 'center',
            textTransform: 'uppercase',
        },
        invoiceNoContainer: {
            flexDirection: 'row',
            marginTop: 36,
            marginLeft:320
        },
        invoiceRef:{
            flexDirection:'row',
            marginLeft:320
        },
        invoiceDateContainer: {
            flexDirection: 'row',
            marginLeft:320

        },
        invoiceLettre:{
            flexDirection: 'row',
            marginTop:20  
        },
        invoiceDate: {
                fontSize: 12,
                fontStyle: 'bold',
        },
        invoiceModalite:{
            flexDirection: 'row', 
        },
        label: {
            width: 60
        },
        headerContainer: {
            marginTop: 36
        },
        billTo: {
            marginTop: 20,
            paddingBottom: 3,
            fontFamily: 'Helvetica-Oblique'
        },
        conatainerTable:{
            flexDirection: 'row',
            borderBottomColor: '#bff0fd',
            borderBottomWidth: 1,
            alignItems: 'center',
            height: 24,
            fontStyle: 'bold',
             backgroundColor:'#bff0fd',
             marginTop:20

        },
        numeros:{
            width:'5%',
            borderRightColor: borderColor,
            borderRightWidth: 1,
        },
        description:{
            width:'60%',
            borderRightColor: borderColor,
            borderRightWidth: 1,
        },
        qty:{
            width:'10%',
            borderRightColor: borderColor,
            borderRightWidth: 1,
        },
        pu:{
            width:'10%',
            borderRightColor: borderColor,
            borderRightWidth: 1 
        },
        montant:{
            width:'15%',
            borderRightColor: borderColor,
            borderRightWidth: 1  
        },
        row: {
            flexDirection: 'row',
            borderBottomColor: '#bff0fd',
            borderBottomWidth: 1,
            alignItems: 'center',
            height: 24,
            fontStyle: 'bold',
        },
        numeross:{
            width: '5%',
            textAlign: 'left',
            borderRightColor: borderColor,
            borderRightWidth: 1,
            paddingLeft: 8, 
        },
        descriptions: {
            width: '60%',
            textAlign: 'left',
            borderRightColor: borderColor,
            borderRightWidth: 1,
            paddingLeft: 8,
        },
        qtys: {
            width: '10%',
            borderRightColor: borderColor,
            borderRightWidth: 1,
            textAlign: 'right',
            paddingRight: 8,
        },
        rates: {
            width: '10%',
            borderRightColor: borderColor,
            borderRightWidth: 1,
            textAlign: 'right',
            paddingRight: 8,
        },
        amounts: {
            width: '15%',
            textAlign: 'right',
            paddingRight: 8,
        },
        descriptiontotal:{
            width: '85%',
            textAlign: 'right',
            borderRightColor: borderColor,
            borderRightWidth: 1,
            paddingRight: 8,
        },
        total: {
            width: '15%',
            textAlign: 'right',
            paddingRight: 8,
        }, 




    })
    return (
      <Document>
          <Page size="A4"  style={styles.page}>
              <Image src={logo} style={styles.logo}/>
              <View style={styles.titleContainer}>
                 <Text style={styles.reportTitle}>LavBusness</Text>
             </View>
             <Fragment>
                <View style={styles.invoiceNoContainer}>
                    <Text style={styles.label}>No Facture:</Text>
                    <Text style={styles.invoiceDate}>Fac-2020-001</Text>
                </View >
                <View style={styles.invoiceDateContainer}>
                    <Text style={styles.label}>Date: </Text>
                    <Text >2020-01-12</Text>
                </View >
                <View style={styles.invoiceRef}>
                    <Text style={styles.label}>v/Réf: </Text>
                    <Text >Equipement Informatique</Text>
                </View >
            </Fragment>
            <View style={styles.headerContainer}>
                <Text style={styles.billTo}>Information client:</Text>
                <Text>UNFPA</Text>
                <Text>Kinshasa-Gombe</Text>
                <Text>Gmapwata6@gmail.com</Text>
                <Text>+243810951614</Text>
                <Text></Text>
            </View>
            <View style={styles.conatainerTable}>
                <Text style={styles.numeros}>N°</Text>
                <Text style={styles.description}>Produits/Services</Text>
                <Text style={styles.qty}>Qty</Text>
                <Text style={styles.pu}>Pu</Text>
                <Text style={styles.montant}>Montant</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.numeross}>1</Text>
                <Text style={styles.descriptions}>
                Hp Elite Book 840 G5
                Processeur Intel Core i5-8265U (Quad-Core 1.6 GHz / 3.9 GHz Turbo - Cache 6 Mo)
                16 Go de mémoire DDR4 
                Ecran de 14" anti-reflets avec résolution Full HD (1920 x 1080)
                Dalle IPS : couleurs lumineuses et angles de vision larges
                Fonctionnement rapide avec un SSD M.2 PCIe de 256 Go
                Communication sans fil Wi-Fi AC + Bluetooth 5.0
                Clavier rétroéclairé résistant aux éclaboussures
                Webcam IR HD avec capteur de luminosité ambiante
                2 ports USB 3.0 + 1 port USB 3.1 Type C
                Connecteur HDMI v1.4b
                Sécurité : puce TPM 2.0 et lecteur d'empreinte digitale
                Système audio Bang & Olufsen
                Windows 10 Professionnel 64 bits
                </Text>
                <Text style={styles.qtys}>20</Text>
                <Text style={styles.rates}>30</Text>
                <Text style={styles.amounts}>1200</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.numeross}>2</Text>
                <Text style={styles.descriptions}>
                Hp Elite Book 840 G5
                Processeur Intel Core i5-8265U (Quad-Core 1.6 GHz / 3.9 GHz Turbo - Cache 6 Mo)
                16 Go de mémoire DDR4 
                Ecran de 14" anti-reflets avec résolution Full HD (1920 x 1080)
                Dalle IPS : couleurs lumineuses et angles de vision larges
                Fonctionnement rapide avec un SSD M.2 PCIe de 256 Go
                Communication sans fil Wi-Fi AC + Bluetooth 5.0
                Clavier rétroéclairé résistant aux éclaboussures
                Webcam IR HD avec capteur de luminosité ambiante
                2 ports USB 3.0 + 1 port USB 3.1 Type C
                Connecteur HDMI v1.4b
                Sécurité : puce TPM 2.0 et lecteur d'empreinte digitale
                Système audio Bang & Olufsen
                Windows 10 Professionnel 64 bits
                </Text>
                <Text style={styles.qtys}>20</Text>
                <Text style={styles.rates}>30</Text>
                <Text style={styles.amounts}>1200</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.numeross}>3</Text>
                <Text style={styles.descriptions}>
                Hp Elite Book 840 G5
                Processeur Intel Core i5-8265U (Quad-Core 1.6 GHz / 3.9 GHz Turbo - Cache 6 Mo)
                16 Go de mémoire DDR4 
                Ecran de 14" anti-reflets avec résolution Full HD (1920 x 1080)
                Dalle IPS : couleurs lumineuses et angles de vision larges
                Fonctionnement rapide avec un SSD M.2 PCIe de 256 Go
                Communication sans fil Wi-Fi AC + Bluetooth 5.0
                Clavier rétroéclairé résistant aux éclaboussures
                Webcam IR HD avec capteur de luminosité ambiante
                2 ports USB 3.0 + 1 port USB 3.1 Type C
                Connecteur HDMI v1.4b
                Sécurité : puce TPM 2.0 et lecteur d'empreinte digitale
                Système audio Bang & Olufsen
                Windows 10 Professionnel 64 bits
                </Text>
                <Text style={styles.qtys}>20</Text>
                <Text style={styles.rates}>30</Text>
                <Text style={styles.amounts}>1200</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.numeross}>4</Text>
                <Text style={styles.descriptions}>
                Hp Elite Book 840 G5
                Processeur Intel Core i5-8265U (Quad-Core 1.6 GHz / 3.9 GHz Turbo - Cache 6 Mo)
                16 Go de mémoire DDR4 
                Ecran de 14" anti-reflets avec résolution Full HD (1920 x 1080)
                Dalle IPS : couleurs lumineuses et angles de vision larges
                Fonctionnement rapide avec un SSD M.2 PCIe de 256 Go
                Communication sans fil Wi-Fi AC + Bluetooth 5.0
                Clavier rétroéclairé résistant aux éclaboussures
                Webcam IR HD avec capteur de luminosité ambiante
                2 ports USB 3.0 + 1 port USB 3.1 Type C
                Connecteur HDMI v1.4b
                Sécurité : puce TPM 2.0 et lecteur d'empreinte digitale
                Système audio Bang & Olufsen
                Windows 10 Professionnel 64 bits
                </Text>
                <Text style={styles.qtys}>20</Text>
                <Text style={styles.rates}>30</Text>
                <Text style={styles.amounts}>1200</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.numeross}>5</Text>
                <Text style={styles.descriptions}>
                Hp Elite Book 840 G5
                Processeur Intel Core i5-8265U (Quad-Core 1.6 GHz / 3.9 GHz Turbo - Cache 6 Mo)
                16 Go de mémoire DDR4 
                Ecran de 14" anti-reflets avec résolution Full HD (1920 x 1080)
                Dalle IPS : couleurs lumineuses et angles de vision larges
                Fonctionnement rapide avec un SSD M.2 PCIe de 256 Go
                Communication sans fil Wi-Fi AC + Bluetooth 5.0
                Clavier rétroéclairé résistant aux éclaboussures
                Webcam IR HD avec capteur de luminosité ambiante
                2 ports USB 3.0 + 1 port USB 3.1 Type C
                Connecteur HDMI v1.4b
                Sécurité : puce TPM 2.0 et lecteur d'empreinte digitale
                Système audio Bang & Olufsen
                Windows 10 Professionnel 64 bits
                </Text>
                <Text style={styles.qtys}>20</Text>
                <Text style={styles.rates}>30</Text>
                <Text style={styles.amounts}>1200</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.descriptiontotal}>TOTAL HT</Text>
                <Text style={styles.total}>$6000.00</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.descriptiontotal}>Tva 16%</Text>
                <Text style={styles.total}>$0.00</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.descriptiontotal}>Remise</Text>
                <Text style={styles.total}>$0.00</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.descriptiontotal}>TOTAL TTC</Text>
                <Text style={styles.total}>$6000.00</Text>
            </View>
            <Fragment >
                <View style={styles.invoiceLettre}>
                    <Text style={styles.label}>Lettre: </Text>
                    <Text >six mille dollards americain</Text>
                </View >
                <View style={styles.invoiceModalite}>
                    <Text style={styles.label}>Modalité </Text>
                    <Text >Paiement par cash</Text>
                </View >
            </Fragment>
          </Page>
      </Document>
    )
}
export default   Facture;
