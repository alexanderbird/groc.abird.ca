import Typography from '@mui/material/Typography';

import { useDialogState } from '../../hooks/useDialogState';
import { ConfirmDialog } from '../../components/ConfirmDialog.jsx';

export function useClearListDialog({ clearList }) {
  const dialogState = useDialogState();
  const StatefulClearListDialog = props =>
    <ClearListDialog {...props} clearList={clearList} dialogState={dialogState} />;
  return [dialogState.open, StatefulClearListDialog];
}

export const ClearListDialog = ({ itemsCount, clearList, dialogState }) => {
  return (
    <ConfirmDialog
      open={dialogState.isOpen}
      onCancel={dialogState.close}
      confirmText="Clear List"
      onConfirm={() => { clearList(); dialogState.close(); }}
    >
      <Typography>
        Do you want to empty the list?
        `You are about to remove { itemsCount } item{ itemsCount === 1 ? '' : 's'}.
      </Typography>
    </ConfirmDialog>
  );
};
