export async function data(){
    let d = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
    return await d.json()
}
export function createMap(data){
    const myMap = new Map();
    const value = data.users;
    for(const entry of value){
        const id = entry.id;
        const name = entry.name;
        const available = entry.available;
        myMap.set(id, {'name': name, 'available':available});
    }
    return myMap;
}


export function groupDataByStatus(data_tickets, user_map){
    let groupByStatus = new Map()
    groupByStatus.set("Backlog", [])
    groupByStatus.set("Todo", [])
    groupByStatus.set("In progress", [])
    groupByStatus.set("Cancelled", [])
    groupByStatus.set("Done", [])
    for(const entry of data_tickets){
        const employee_detail = user_map.get(entry.userId);
        if(groupByStatus.has(entry.status)===false)
                groupByStatus.set(entry.status, [])

        const array = groupByStatus.get(entry.status)
        array.push({
            'id' : entry.id,
            'title' : entry.title,
            'name' : employee_detail.name,
            'availability' : employee_detail.available,
            'priority' : entry.priority,
            'tag' : entry.tag[0],
        })   
        groupByStatus.set(entry.status, array)

    }
    groupByStatus.set("Cancelled", [])
    return groupByStatus;
}
export function groupDataByPriority(data_tickets, user_map){
    let groupByPriority = new Map()
    for(const entry of data_tickets){
        const employee_detail = user_map.get(entry.userId);
        if(groupByPriority.has(entry.priority)===false)
            groupByPriority.set(entry.priority, [])

        const array = groupByPriority.get(entry.priority)
        array.push({
            'id' : entry.id,
            'title' : entry.title,
            'name' : employee_detail.name,
            'availability' : employee_detail.available,
            'status' : entry.status,
            'tag' : entry.tag[0],
        })   
        groupByPriority.set(entry.priority, array)

    }
    return groupByPriority;
}
export function groupDataByUser(data_tickets, user_map){
    let groupByUser = new Map()
    for(const entry of data_tickets){
        const employee_detail = user_map.get(entry.userId);
        if(groupByUser.has(employee_detail.name)===false)
            groupByUser.set(employee_detail.name, [])

        const array = groupByUser.get(employee_detail.name)
        array.push({
            'id' : entry.id,
            'title' : entry.title,
            'status' : entry.status,
            'availability' : employee_detail.available,
            'priority' : entry.priority,
            'tag' : entry.tag[0],
        })   
        groupByUser.set(employee_detail.name, array)

    }
    return groupByUser;
}

