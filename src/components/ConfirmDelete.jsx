'use client';

import {Button, Modal} from 'antd';

export default function ConfirmDelete({openModal, serie, confirmLoading, onSubmit, onCancel}) {
    return (
        <Modal
            open={openModal}
            title="Confirmar exclusão"
            centered
            onCancel={onCancel}
            footer = {null}
            destroyOnHidden>
            <p>Tem certeza que deseja excluir a série "{serie?.title}"?</p>
            <Button danger type="primary" loading={confirmLoading} onClick={onSubmit}>
             Excluir
            </Button>
        </Modal>
    );
}   