import {handleResponse} from '../helpers/HandleResponse';
export const kpiPersonalService = {
    getAllKPIPersonalOfUnit,
    getAllKPIPersonal,
    getKPIMemberByMonth,
    getCurrentKPIPersonal,
    getKPIPersonalById,
    createKPIPersonal,
    editKPIPersonal,
    editStatusKPIPersonal,
    approveKPIPersonal,
    deleteKPIPersonal,
    addNewTargetPersonal,
    editTargetKPIPersonal,
    editStatusTarget,
    evaluateTarget,
    deleteTarget
};
// Lấy tất cả kpi cá nhân của các cá nhân trong đơn vị
function getAllKPIPersonalOfUnit(infosearch) {
    console.log(infosearch);
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/kpipersonals/all-member/${infosearch.role}/${infosearch.user}/${infosearch.status}/${infosearch.starttime}/${infosearch.endtime}`, requestOptions).then(handleResponse);
}
// Lấy tất cả kpi cá nhân
function getAllKPIPersonal(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/kpipersonals/user/${id}`, requestOptions).then(handleResponse);
}
// Lấy KPI cá nhân của nhân vien theo id
function getKPIPersonalById(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/kpipersonals/${id}`, requestOptions).then(handleResponse);
}
// Lấy KPI cá nhân của nhân vien theo tháng
function getKPIMemberByMonth(id, time) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/kpipersonals/member/${id}/${time}`, requestOptions).then(handleResponse);
}
// Lấy KPI cá nhân hiện tại
function getCurrentKPIPersonal(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/kpipersonals/current/${id}`, requestOptions).then(handleResponse);
}
// khởi tạo kpi cá nhân 
function createKPIPersonal(newKPI) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newKPI)
    };

    return fetch(`/kpipersonals/create`, requestOptions).then(handleResponse);
}
// chỉnh sửa kpi cá nhân
function editKPIPersonal(id, newTarget) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTarget)
    };

    return fetch(`/kpipersonals/${id}`, requestOptions).then(handleResponse);
}
// chỉnh sửa trạng thái của kpi cá nhân
function editStatusKPIPersonal(id, status) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`/kpipersonals/status/${id}/${status}`, requestOptions).then(handleResponse);
}
// Phê duyệt kpi cá nhân
function approveKPIPersonal(id) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`/kpipersonals/approve/${id}`, requestOptions).then(handleResponse);
}
// Xóa KPI cá nhân
function deleteKPIPersonal(id) {
    const requestOptions = {
        method: 'DELETE',
    };

    return fetch(`/kpipersonals/${id}`, requestOptions).then(handleResponse);
}
// thêm mục tiêu KPI cá nhân 
function addNewTargetPersonal(newTarget) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTarget)
    };

    return fetch(`/kpipersonals/create-target`, requestOptions).then(handleResponse);
}
// Chỉnh sửa mục tiêu KPI cá nhân
function editTargetKPIPersonal(id, newTarget) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTarget)
    };

    return fetch(`/kpipersonals/target/${id}`, requestOptions).then(handleResponse);
}
// chỉnh sửa trạng thái của kpi cá nhân
function editStatusTarget(id) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`/kpipersonals/status-target/${id}`, requestOptions).then(handleResponse);
}
// Đánh giá mục tiêu KPI cá nhân
function evaluateTarget(id, result) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result)
    };

    return fetch(`/kpipersonals/evaluate/${id}`, requestOptions).then(handleResponse);
}
// Xóa mục tiêu kpi cá nhân
function deleteTarget(id, kpipersonal) {
    const requestOptions = {
        method: 'DELETE',
    };

    return fetch(`/kpipersonals/target/${kpipersonal}/${id}`, requestOptions).then(handleResponse);
}

