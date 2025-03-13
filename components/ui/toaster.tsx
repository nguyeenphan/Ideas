/** @format */

'use client';

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';
import { useToast } from '@/hooks/use-toast';
import { TOAST_REMOVE_DELAY } from '@/hooks/use-toast';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="absolute max-w-full">
      <ToastProvider>
        {toasts.map(function ({
          id,
          title,
          description,
          action,
          duration,
          ...props
        }) {
          return (
            <Toast key={id} {...props}>
              <div className="flex flex-col w-full">
                <div className="flex justify-start items-center w-full p-2 gap-2 mr-4">
                  <div className="grid gap-1">
                    {title && <ToastTitle>{title}</ToastTitle>}
                    {description && (
                      <ToastDescription>{description}</ToastDescription>
                    )}
                  </div>
                  {action}
                </div>
                <ToastClose />
              </div>
            </Toast>
          );
        })}
        <ToastViewport />
      </ToastProvider>
    </div>
  );
}