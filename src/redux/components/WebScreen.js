import React from 'react';
import {
    StyleSheet,
    View,
    WebView,
    ActivityIndicator
} from 'react-native';
const WEBVIEW_REF = 'webview';
class WebScreen extends React.Component {
    static navigationOptions=({navigation})=>{
        return {
            title:navigation.state.params.title,
        }

    };


    constructor(props) {
        super(props);
        this.state={
            url:''
        }
    }

    componentDidMount(){
        this.setState({
            url:this.props.navigation.state.params.url?this.props.navigation.state.params.url:''
        })
    }

    render() {
        return (
            <View
                style={{flex:1}}
            >
                <WebView
                    ref={WEBVIEW_REF}
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={{uri: this.state.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    onNavigationStateChange={this.onNavigationStateChange}
                    onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                    startInLoadingState={true}
                    renderLoading={()=>{
                        return(
                              <ActivityIndicator style={styles.ind} color="black" size="large"/>
                        )
                    }}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    webView: {
        backgroundColor: '#fff',
    },
    ind:{
        alignItems:'center',
        justifyContent:'center'
    }

});
export default WebScreen