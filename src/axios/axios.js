/**
 * 语法：
 axios(options)
 参数配置对象：url, method, params与data
 返回值为：promise对象
 axios.get(url, options)
 axios.post(url, data, options)
 axios.put(url, data, options)
 axios.delete(url, options)
 功能：使用xhr发送ajax请求的工具函数，与axios库功能类似

 * @param method 可为POST,GET,PUT,DELETE
 * @param url
 * @param params
 * @param data
 * @returns {Promise<any>}
 */
function axios({method, url, params, data}){
    //方法转化大写
    method = method.toUpperCase();
    //返回值
    return new Promise((resolve, reject) => {
        //四步骤
        //1. 创建对象
        const xhr = new XMLHttpRequest();
        //2. 初始化
        //处理 params 对象 a=100&b=200
        let str = '';
        for(let k in params){
            str += `${k}=${params[k]}&`;
        }
        str = str.slice(0, -1);
        xhr.open(method, url+'?'+str);
        //3. 发送
        if(method === 'POST' || method === 'PUT' || method === 'DELETE'){
            //Content-type mime类型设置
            xhr.setRequestHeader('Content-type','application/json');
            //设置请求体
            xhr.send(JSON.stringify(data));
        }else{
            xhr.send();
        }
        //设置响应结果的类型为 JSON
        xhr.responseType = 'json';
        //4. 处理结果
        xhr.onreadystatechange = function(){
            //
            if(xhr.readyState === 4){
                //判断响应状态码 2xx
                if(xhr.status >= 200 && xhr.status < 300){
                    //成功的状态
                    resolve({
                        status: xhr.status,
                        message: xhr.statusText,
                        body: xhr.response
                    });
                }else{
                    reject(new Error('请求失败, 失败的状态码为' + xhr.status));
                }
            }
        }

    });
}

/**
 * GET请求
 * @param url
 * @param options
 * @returns {Promise<any>}
 */
axios.get = function(url, options){
    //发送 AJAX 请求 GET
    let config = Object.assign(options, {method:'GET', url: url});
   
    return axios(config);
}

/**
 * POST请求
 * @param url
 * @param options
 * @returns {Promise<any>}
 */
axios.post = function(url, options){
    //发送 AJAX 请求 GET
    let config = Object.assign(options, {method:'POST', url: url});
   
    return axios(config);
}

/**
 * PUT 请求

 * @param url
 * @param options
 * @returns {Promise<any>}
 */
axios.put = function(url, options){
    //发送 AJAX 请求 GET
    let config = Object.assign(options, {method:'PUT', url: url});
   
    return axios(config);
}

/**
 * DELETE请求
 * @param url
 * @param options
 * @returns {Promise<any>}
 */
axios.delete = function(url, options){
    //发送 AJAX 请求 GET
    let config = Object.assign(options, {method:'delete', url: url});
   
    return axios(config);
}