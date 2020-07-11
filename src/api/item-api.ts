import { instance, APIResponseType } from "./api";

export type SavePhotoResponseType = {
  photos: {
    small: string | null;
    large: string | null;
  };
};

export const itemApi = {
  getUsersProfile(userId: number) {
    return instance.get<string>(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },

  getStatus(userId: number) {
    return instance
      .get<string | null>(`profile/status/${userId}`)
      .then((response) => {
        return response.data;
      });
  },

  updateStatus(status: string | null) {
    return instance.put<APIResponseType>(`profile/status`, { status });
  },

  savePhoto(photoFile: File) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance
      .put<APIResponseType<SavePhotoResponseType>>(`profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        return response.data;
      });
  },

  saveProfileInfo(profile: {
    aboutMe: string | null;
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    fullName: string;
  }) {
    return instance.put<APIResponseType>(`profile`, profile);
  },
};
