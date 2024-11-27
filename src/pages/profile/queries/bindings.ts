import { useEffect, useRef } from "react";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export interface Binding {
  id: string;
  user_id: string;
  external_binding_id: string;
  entity: string;
  created_at: string; // ISO date string
  deactivated_at?: string | null;
  meta: {
    gw_id: string;
    bank_name: string;
    maskedPan: string;
    paymentSystem: string;
    cardholderName: string;
    expirationDate: string; // Format: YYYYMM
  };
}

interface GetBindingsResponse {
  data: Binding[];
  [key: string]: any;
}

interface UseBindingsQueryParams {
  userId: string;
  bindingId?: string;
  [key: string]: any;
}

const USER_TOKEN =
  "eyJraWQiOiJwdWJsaWM6dGVzdCIsImN0eSI6IkpXVCIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhbXAiLCJ2ZXIiOiIxLjAiLCJwdXJwb3NlIjoiYWNjZXNzX3Rva2VuIiwiaXNzIjoiaHR0cHM6Ly9kZXYtc2FuZGJveC1pYW0uYXRvbS5lLWthbWEuY29tL3NzbyIsInRva2VuTmFtZSI6ImFjY2Vzc190b2tlbiIsImRldmljZUlkIjpbIm51bGwiXSwiYXVkIjoiYW1wIiwiZXhlY3V0aW9uSWQiOiJiNjUzNGM5Mi00N2VmLTQ3YTQtOTAzNC00MTZmMDRjM2I1YmEiLCJhdGgiOjE3MzI2MjY3MzUsInN5c3RlbVJvbGUiOlsiMSJdLCJhenAiOiJhbXAiLCJjbGFpbXMiOnsiZXhlY3V0aW9uSWQiOiJiNjUzNGM5Mi00N2VmLTQ3YTQtOTAzNC00MTZmMDRjM2I1YmEiLCJyb2xlcyI6WyJST0xFX1NZU1RFTSJdLCJhdXRoX3RpbWUiOjE3MzI2MjY3MzV9LCJyZWFsbSI6Ii9lbXBsb3llZSIsInNjb3BlcyI6WyJ0ZWxlcGhvbmVOdW1iZXIiLCJjb250YWN0RW1haWwiLCJkaXNwbGF5TmFtZSIsIm9wZW5pZCIsInVzZXJfbmFtZSIsImFtciIsInJvbGVzIiwiZnVsbE5hbWUiLCJjbiIsImNvbS5yb294dGVhbS5zc28uYXV0aC5kZWxlZ2F0ZS5hdXRoTWV0aG9kIiwiZGV2aWNlSWQiLCJleHRlbmRlZEF0dHJpYnV0ZXMiLCJjdXJyT3JnUm9sZXMiLCJnaXZlbm5hbWUiLCJvcmdhbml6YXRpb25zIiwibWlkZGxlTmFtZSIsIm9yZ1JvbGVzIiwic24iLCJhdXRoVHlwZSIsImNvbnRhY3RQaG9uZSIsImNpZCJdLCJleHAiOjE3MzI2Mjc5MzUsInRva2VuVHlwZSI6IkJlYXJlciIsIm1zaXNkbiI6WyJudWxsIl0sImlhdCI6MTczMjYyNjczNSwiYXV0aExldmVsIjpbIjAiXSwianRpIjoiMTAyMzM5MzYtZTJmNi00MDg5LTg4ZjEtMTU2YjA3ZDkyZGNkIn0.Ct8lEir4-013zzNISqZvff2bhrrpibPDzuR8Zzhm7Er7vwXjmiNgn4rmcTmE3ULtdkOCaFnNxnQWhpO5kBUuoXH7njZwvkli7AwLgQwNiReRCYPKMGaSFR_S_67bKWltiXKIhUPRGd6hxH4AvahnpFvhRJPilt8-oYr-vw5xHsclSJ4jYucnPUKcEk5mOxhqZKvvLrbQxYXrOXEdY7HcRN24ilHTI8N4KVTsieTCZX88n4AvaKQGVghD9Qx7lX3UHtcrwLLluqj3RPq1wi_VG0lUIUL6HYXHdHKjwZlxY8V5PNmaASBwn3pjg6eEOR8S-OVdqIUjfpHvoPLeL7oSPw";

const MOCK = [
  {
    id: "bnd_01jdpb0n22rt8e2tvx19tx4yq2",
    meta: {
      gw_id: "TEST-BANK-ATOM",
      bank_name: "TEST-BANK-ATOM",
      maskedPan: "411111**1111",
      paymentSystem: "VISA",
      cardholderName: "Andrey Bolkonsky",
      expirationDate: "202412",
    },
    user_id: "usr_amp",
    external_binding_id: "01jdpb0n22rt8e2tvx19tx4yq2",
    entity: "binding",
    created_at: "2024-11-27T08:15:15.831187+00:00",
    deactivated_at: null,
  },
  {
    id: "bnd_01jdpb0n22rt8e2tvx19tx4yq21111",
    meta: {
      gw_id: "TEST-BANK-ATOM",
      bank_name: "TEST-BANK-ATOM",
      maskedPan: "411111**1111",
      paymentSystem: "VISA",
      cardholderName: "Andrey Bolkonsky",
      expirationDate: "202412",
    },
    user_id: "usr_amp",
    external_binding_id: "01jdpb0n22rt8e2tvx19tx4yq2",
    entity: "binding",
    created_at: "2024-11-27T08:15:15.831187+00:00",
    deactivated_at: null,
  },
];

const httpBindingApi = {
  getBindings: async (
    userId: string,
    bindingId: string | undefined,
    signal: AbortSignal,
  ): Promise<any> => {
    // ): Promise<Response> => {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      "Atomid-Access-Token": USER_TOKEN,
      // "X-Api-Key" : "key_01j84zgggdz9xk78hfmsz0sb5w"
    };
    const url = new URL(
      "https://payments.dev.mnt.int.e-kama.com/api/v1/bindings",
    );
    url.searchParams.append("user_id", userId);
    if (bindingId) {
      url.searchParams.append("binding_id", bindingId);
    }

    return { data: MOCK };
    // return fetch(url.toString(), {
    //   method: "GET",
    //   headers,
    //   signal,
    // });
  },
  deleteBinding: async (bindingId: string): Promise<void> => {
    await fetch(`/api/bindings/${bindingId}`, { method: "DELETE" });
  },
};

export const useBindingsQuery = ({
  userId,
  bindingId,
  ...params
}: UseBindingsQueryParams) => {
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [userId]);

  return useQuery<Binding[], Error>({
    ...params,
    queryKey: ["bindings", userId, bindingId],
    queryFn: async () => {
      const response = await httpBindingApi.getBindings(
        userId,
        bindingId,
        abortControllerRef.current!.signal,
      );
      // const result: GetBindingsResponse = await response.json();
      // if (!result.data) {
      if (!response.data) {
        throw new Error("Нет данных");
      }
      return response.data.filter((item: any) => !item.deactivated_at);
    },
    enabled: !!userId || !!bindingId,
    staleTime: 0,
  });
};

export function useDeactivateBindingMutation(userId: string) {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: (bindingId: string) => httpBindingApi.deleteBinding(bindingId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["bindings", userId],
      });
    },
  });
}
