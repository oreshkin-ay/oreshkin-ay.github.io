import { useQuery } from "@tanstack/react-query";

export const useUserProfileQuery = (userToken: string) => {
  return useQuery({
    queryKey: ["userProfile", userToken],
    queryFn: async () => {
      const response = await fetch(
        "https://atomid-gateway.dev.mnt.int.e-kama.com/api/v1/profile",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error("Ошибка при загрузке профиля");
      }

      const data = await response.json();

      if (!data) {
        throw new Error("Нет данных профиля");
      }

      return data;
    },
  });
};
