// AppStyles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
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
    }
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

export const detailStyles = StyleSheet.create({
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

