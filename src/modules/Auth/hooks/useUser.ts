import { useAuthStore } from '@/services/stores/auth';
import { useUserControllerFindMe } from '@/services/swagger/Core';

export const useUser = () => {
  const [{ accessToken }] = useAuthStore();
  return useUserControllerFindMe({ query: { enabled: !!accessToken } });
};
