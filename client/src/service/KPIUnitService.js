import {handleResponse} from '../helpers/HandleResponse';
export const kpiUnitService = {
    getAllKPIUnit,
    getCurrentKPIUnit,
    getKPIParent,
    addKPIUnit,
    addTargetKPIUnit,
    editKPIUnit,
    editStatusKPIUnit,
    evaluateKPIUnit,
    editTargetKPIUnit,
    deleteKPIUnit,
    deleteTargetKPIUnit
};
// Lấy tất cả KPI đơn vị
function getAllKPIUnit(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/kpiunits/unit/${id}`, requestOptions).then(handleResponse);
}

// Lấy KPI đơn vị hiện tại
function getCurrentKPIUnit(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/kpiunits/current-unit/role/${id}`, requestOptions).then(handleResponse);
}

// Lấy KPI đơn vị cha
function getKPIParent(parentUnit) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`/kpiunits/parent/${parentUnit}`, requestOptions).then(handleResponse);
}

// Khởi tạo KPI đơn vị 
function addKPIUnit(newKPI) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newKPI)
    };

    return fetch(`/kpiunits/create`, requestOptions).then(handleResponse);
}

// Thêm mục tiêu cho KPI đơn vị 
function addTargetKPIUnit(newTarget) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTarget)
    };

    return fetch(`/kpiunits/create-target`, requestOptions).then(handleResponse);
}

// Chỉnh sửa KPI đơn vị
function editKPIUnit(id, newKPI) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newKPI)
    };

    return fetch(`/kpiunits/${id}`, requestOptions).then(handleResponse);
}

// Chỉnh sửa trạng thái của KPI đơn vị
function editStatusKPIUnit(id, status) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`/kpiunits/status/${id}/${status}`, requestOptions).then(handleResponse);
}

// Cập nhật dữ liệu cho KPI đơn vị
function evaluateKPIUnit(id) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`/kpiunits/evaluate/${id}`, requestOptions).then(handleResponse);
}

// Chỉnh sửa mục tiêu của KPI đơn vị
function editTargetKPIUnit(id, newTarget) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTarget)
    };

    return fetch(`/kpiunits/target/${id}`, requestOptions).then(handleResponse);
}

// Xóa KPI đơn vị
function deleteKPIUnit(id) {
    const requestOptions = {
        method: 'DELETE',
    };

    return fetch(`/kpiunits/${id}`, requestOptions).then(handleResponse);
}

// xóa mục tiêu của KPI đơn vị
function deleteTargetKPIUnit(id, kpiunit) {
    const requestOptions = {
        method: 'DELETE',
    };

    return fetch(`/kpiunits/target/${kpiunit}/${id}`, requestOptions).then(handleResponse);
}