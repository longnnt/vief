import { Event } from "../section-event/interface";

export interface FormSignupProps {
  isExpired?: boolean;
}
export type ContentProps = {
  isExpired?: boolean;
  data: Event;
};

export type EventDetailProps = {
  isExpired?: boolean;
  data?: Event;
};
export interface FormAlertProps {
  message?: string;
}

export interface LeftContentProps {
  data: Event;
}
