import { Client, Account, Avatars, OAuthProvider } from 'react-native-appwrite';
import * as Linking from 'expo-linking';
import { openAuthSessionAsync } from "expo-web-browser";

export const config={
    platform:'com.olmez.tubrary',
    endpoint:process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId:process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId:process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
    collectionId:process.env.EXPO_PUBLIC_APPWRITE_PLAYLIST_COLLECTION_ID
}

const client = new Client()
    .setProject(config.projectId!)
    .setPlatform(config.platform!)
    .setEndpoint(config.endpoint!);


export const avatar= new Avatars(client);
export const account = new Account(client);

export const login=async()=>{
    try {
        const redirectUri = Linking.createURL("/");

        const response = await account.createOAuth2Token( OAuthProvider.Google, redirectUri);
        
        if (!response) throw new Error("Create OAuth2 token failed (Response)");

        const browserResult = await openAuthSessionAsync(response.toString(), redirectUri);
    
        if (browserResult.type !== "success") throw new Error("Create OAuth2 token failed (Browser Result)");

        const url = new URL(browserResult.url);
        const secret = url.searchParams.get("secret")?.toString();
        const userId = url.searchParams.get("userId")?.toString();
        
        if (!secret || !userId) throw new Error("Create OAuth2 token failed (Secret or User ID)");

        const session = await account.createSession(userId, secret);
        
        if (!session) throw new Error("Failed to create session");

        return true;
        
    } catch (error) {
        console.error(error)
        return false
    }
}

export async function logout() {
    try {
      const result = await account.deleteSession("current");
      return result;
    } catch (error) {
      console.error(error);
      return false;
    }
}

export async function getCurrentUser() {
    try {
      const result = await account.get();
      if (result.$id) {
        const userAvatar = avatar.getInitials(result.name);
  
        return {
          ...result,
          avatar: userAvatar.toString(),
        };
      }
  
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
}

