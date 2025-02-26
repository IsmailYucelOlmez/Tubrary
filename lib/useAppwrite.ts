import { QueryObserverResult, useQuery } from 'react-query';
import { Alert } from 'react-native';

interface UseAppwriteOptions<T, P extends Record<string, string | number>> {
  fn: (params: P) => Promise<T>;
  params?: P;
}

interface UseAppwriteReturn<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<QueryObserverResult<T | null, Error>>;
}

export const useAppwrite = <T, P extends Record<string, string | number>>({ fn, params = {} as P,}: UseAppwriteOptions<T, P>): UseAppwriteReturn<T> => {
  
  const { data=null, isLoading, error,refetch } = useQuery<T | null, Error>(
    ['appwriteData', params], // Query key
    () => fn(params), // Query function
    {
        onError: (err: Error) => Alert.alert("Hata", err.message || "Bilinmeyen bir hata oluştu."),
    }
  );

  return { data: data, isLoading, error: error?.message ?? null,refetch };
};
