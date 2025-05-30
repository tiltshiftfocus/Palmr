import type { AxiosResponse } from "axios";

import type {
  AddFiles200,
  AddFilesBody,
  AddRecipients200,
  AddRecipientsBody,
  CreateShare201,
  CreateShareAlias200,
  CreateShareAliasBody,
  CreateShareBody,
  DeleteShare200,
  GetShare200,
  GetShareByAlias200,
  GetShareByAliasParams,
  GetShareParams,
  ListUserShares200,
  NotifyRecipients200,
  NotifyRecipientsBody,
  RemoveFiles200,
  RemoveFilesBody,
  RemoveRecipients200,
  RemoveRecipientsBody,
  UpdateShare200,
  UpdateShareBody,
  UpdateSharePassword200,
  UpdateSharePasswordBody,
} from "../../models";

export type CreateShareResult = AxiosResponse<CreateShare201>;
export type UpdateShareResult = AxiosResponse<UpdateShare200>;
export type ListUserSharesResult = AxiosResponse<ListUserShares200>;
export type GetShareResult = AxiosResponse<GetShare200>;
export type DeleteShareResult = AxiosResponse<DeleteShare200>;
export type UpdateSharePasswordResult = AxiosResponse<UpdateSharePassword200>;
export type AddFilesResult = AxiosResponse<AddFiles200>;
export type RemoveFilesResult = AxiosResponse<RemoveFiles200>;
export type AddRecipientsResult = AxiosResponse<AddRecipients200>;
export type RemoveRecipientsResult = AxiosResponse<RemoveRecipients200>;
export type CreateShareAliasResult = AxiosResponse<CreateShareAlias200>;
export type GetShareByAliasResult = AxiosResponse<GetShareByAlias200>;
export type NotifyRecipientsResult = AxiosResponse<NotifyRecipients200>;

export type {
  CreateShareBody,
  UpdateShareBody,
  GetShareParams,
  UpdateSharePasswordBody,
  AddFilesBody,
  RemoveFilesBody,
  AddRecipientsBody,
  RemoveRecipientsBody,
  CreateShareAliasBody,
  GetShareByAliasParams,
  NotifyRecipientsBody,
};
