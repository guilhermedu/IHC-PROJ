// AppStyles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        height: 40,
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    resultContainer: {
        padding: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    logo:{
        width: 400,
        height: 300,
    },
    logo1:{
        position: 'absolute',
        top: -20,
        width: 150,
        height: 100,
        alignSelf: 'center',
    },
   
    button1: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
      buttonText1: {
        color: 'black',
        fontSize: 14,
        
    },

    button: {
        backgroundColor: '#33afb5',
        padding: 10,
        borderRadius: 5,
        width:300,
        marginTop: 10,
      },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
      
});

export const registerStyles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: 10, 
        left: 10, 
    },
    backButtonText: {
        fontSize: 60,
      },
});

export const AccountScreenStyles = StyleSheet.create({
    logo1:{
        position: 'absolute',
        top: -20,
        width: 150,
        height: 100,
        alignSelf: 'center',
    },
    fotoperfil: {
        position: 'absolute',
        top: 100,
        right: 20,
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    username:{
        position: 'absolute',
        top: 140,
        left: 20,
        fontSize: 35,
        fontWeight: 'bold',
    },
    button1: {
        position: 'absolute',
        top: 300,
        left: 30,
        width: 150,
        height: 150,
        backgroundColor: '#33afb5',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    buttonText: {
        color: 'black',
        fontSize: 26,
    },
    button2: {
        position: 'absolute',
        top: 460,
        left: 30,
        width: 150,
        height: 150,
        backgroundColor: '#33afb5',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    button3: {
        position: 'absolute',
        top: 300,
        right: 30,
        width: 150,
        height: 150,
        backgroundColor: '#33afb5',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    button4: {
        position: 'absolute',
        top: 460,
        right: 30,
        width: 150,
        height: 150,
        backgroundColor: '#33afb5',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },


    
});
export const HomeScreenStyles = StyleSheet.create({
    logo:{
        width: 400,
        height: 300,
        
    },  
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    button: {
        position: 'absolute',
        top: 300,
        left: 30,
        width: 150,
        height: 150,
        backgroundColor: '#33afb5',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    button2: {
        position: 'absolute',
        top: 300,
        right: 30,
        width: 150,
        height: 150,
        backgroundColor: '#33afb5',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    buttonText: {
        color: 'black',
        fontSize: 26,
    }, 
});
export const CarrosScreenstyles = StyleSheet.create({
    logo1:{
        position: 'absolute',
        top: 10,
        width: 150,
        height: 100,
        alignSelf: 'center',
    },
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 20,
    },
    backButton: {
        position: 'absolute',
        top: 10, 
        left: 10, 
    },
    backButtonText: {
        fontSize: 60,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        position: 'absolute', 
        top: 90, 
        left: 0, 
        right: 0, 
        textAlign: 'center', 
    },
    carro1: {
        width: 140,
        height: 140,
        marginLeft:0, 
        marginTop: -104,
        marginLeft:-20,
      },
      
      buttonText: {
        color: 'black',
        fontSize: 15,
        textAlign: 'right',
        marginRight: -10, 
      },
      
      button: {
        top: 150,
        width: 350,
        height: 140,
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'column', 
        marginBottom: 10, 
      },
    buttonrem: {
        backgroundColor: '#33afb5',
        padding: 10,
        borderRadius: 5,
        width:160,
        marginTop: 150,
        left:190,
      },
    buttonTextrem: {
        color: 'white',
        fontSize:18,
        textAlign: 'center',
    },
    buttonadd: {
        backgroundColor: '#33afb5',
        padding: 10,
        borderRadius: 5,
        width:160,
        marginTop: -45,
      },
    buttonTextadd: {
        color: 'white',
        fontSize:18,
        textAlign: 'center',
    },
    buttonadd1: {
        backgroundColor: '#33afb5',
        padding: 10,
        borderRadius: 5,
        width:250,
        marginTop:10,
        left:50,
    },
    buttonTextadd1: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        justifyContent:'center',
    }, 
    input: {
        width: '100%',
        height: 40,
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
    },
    

    
    
});

export const resultsStyles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 3,
        width: '90%',
        alignSelf: 'center',
    },
    header: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTextCentered: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    timeline: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    time: {
        fontSize: 16,
        color: '#333',
    },
    line: {
        flex: 1,
        flexDirection: 'row',
        height: 1,
        backgroundColor: '#ccc',
        marginHorizontal: 10,
        position: 'relative',
        alignItems: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        backgroundColor: 'red',
        borderRadius: 4,
        position: 'absolute',
    },
    firstDot: {
        left: 0,
        marginTop: -4,
    },
    lastDot: {
        right: 0,
        marginTop: -4,
    },
    driverAndPassengerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    driverInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    driverImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    driverDetails: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    driverName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    rating: {
        fontSize: 16,
        color: '#ffd700',
    },
    passengerInfo: {
        marginLeft: 5,
    },
    passengerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#666',
    },
   
});

export const Originstyles = StyleSheet.create({
    logo1:{
        position: 'absolute',
        top: 10,
        width: 150,
        height: 100,
        alignSelf: 'center',
    },
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 20,
    },
    backButton: {
        position: 'absolute',
        top: 10, 
        left: 10, 
    },
    backButtonText: {
        fontSize: 58,
    },
    map: {
        width: '120%',
        height: '82%',
        top: 130,
        left: -20,   
    },
    button1: {
        backgroundColor: '#33afb5',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: 290,
        bottom: -60,
    
    },
    buttonText1: {
        color: '#fff',
        fontSize: 18,
    },
    nextButton: {
        position: 'absolute',
        bottom: 20, 
        right: 10, 
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        top: 80,
    },
});

export const detailStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start', // Ensure content starts at the top of the container
        paddingTop: 0, // Remove padding at the top if previously set
        paddingHorizontal: 10, // Maintain horizontal padding
        backgroundColor: '#f5f5f5', // Background color of the screen
    },
    card: {
        backgroundColor: '#FFF',
        padding: 20,
        marginTop: 10, // Minimal top margin to push card slightly from the very top
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 3,
        width: '90%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    headerTextCentered: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    backButton: {
        marginLeft: -10
    },
    detailText: {
        fontSize: 16,
        color: '#333',
        marginVertical: 5,
    },
    verticalDotsLine: {
        flexDirection: 'column',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    dot: {
        width: 8,
        height: 8,
        backgroundColor: '#333',
        borderRadius: 4,
    },
    horizontalLine: {
        width: '100%',
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
    iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        width: 24, // Set a specific size for icons
        height: 24,
        marginRight: 10, // Add some space between the icon and text
    },
    driverInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginTop: 10,
        marginBottom: 20,
    },
    driverImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    driverName: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
    },
    reservationButton: {
        width: '90%',
        alignSelf: 'center',
        marginVertical: 20,
    },
    rating: {
        fontSize: 16,
        color: '#ffd700',
    }
});
