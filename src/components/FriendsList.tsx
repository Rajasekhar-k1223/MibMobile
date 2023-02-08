import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import loginPageEmail from '../assets/imgs/64666.jpg';
export default function FriendsList() {
  let navigation = useNavigation();
  return (
    <View style={{flexDirection: 'column'}}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('chatview', {
              userName: 'Raja',
              backgroundColor: 'red',
              iconsColor: 'black',
            });
          }}
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 5,
            elevation: 2,
            marginVertical: 2,
            backgroundColor: '#fff',

            //   borderWidth: 2,
          }}>
          <Image
            source={loginPageEmail}
            resizeMode="contain"
            style={{width: 35, height: 35, borderRadius: 35}}
          />
          <View style={{flexDirection: 'column', flex: 4}}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 5,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 15,

                fontWeight: '600',
                color: '#000',
              }}>
              FriendsList
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10,
                marginLeft: 40,
              }}
            />
            <Text>07:29pm</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
