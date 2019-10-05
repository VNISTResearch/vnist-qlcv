export const taskTemplateService = {
    getById,
    addNewTemplate
};
function getById(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/api/forms/manage/${id}`, requestOptions);
}

function addNewTemplate(newTemplate) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTemplate)
    };

    return fetch(`/worktemplates/create`, requestOptions);
}
