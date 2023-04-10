import Toast from 'react-native-toast-message';

const showErrorToast = (error: string) => {
  Toast.show({
    type: 'error',
    text1: 'Something went wrong',
    text2: error,
    autoHide: false,
    onPress: () => Toast.hide(),
  });
};

export { showErrorToast };
