require( "source-map-support" ).install()

;
process.on( 'unhandledRejection' , up => { throw up } )
;
"use strict"
/// Fake namespace for optional overrides
///
/// 	namespace $ { export var x = 1 , y = 1 } // defaults
/// 	namespace $.$$ { export var x = 2 } // overrides
/// 	namespace $.$$ { console.log( x , y ) } // usage
///
var $ = Object.setPrototypeOf( module['export'+'s'] , global )
$.$$ = $

$.$mol = $  // deprecated

;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports;
//mol.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_offline(uri = 'web.js') { }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));
//offline.node.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_offline();
})($ || ($ = {}));
//install.js.map
;
"use strict";
var $;
(function ($) {
    let $$;
    (function ($$_1) {
    })($$ = $.$$ || ($.$$ = {}));
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//ambient.js.map
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    class $mol_object {
        get $() {
            const owner = this.object_owner();
            return (owner && owner.$ || $);
        }
        static make(config) {
            const instance = new this;
            for (let key in config)
                instance[key] = config[key];
            return instance;
        }
        static toString() {
            return this.name;
        }
        object_owner(next) {
            return this['object_owner()'] || (this['object_owner()'] = next);
        }
        object_host(next) {
            return this['object_host()'] || (this['object_host()'] = next);
        }
        object_field(next) {
            return this['object_field()'] || (this['object_field()'] = next) || '';
        }
        object_id(next) {
            return this[Symbol.toStringTag] || (this[Symbol.toStringTag] = next) || '';
        }
        toString() {
            return this.object_id();
        }
        toJSON() {
            return this.toString();
        }
        destructor() { }
    }
    $mol_object.$ = $;
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//object.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $.$mol_object {
        static size(next) {
            return next || {
                width: 1024,
                height: 768,
            };
        }
    }
    $.$mol_window = $mol_window;
})($ || ($ = {}));
//window.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_compare_any(a, b) {
        if (a === b)
            return true;
        if (!Number.isNaN(a))
            return false;
        if (!Number.isNaN(b))
            return false;
        return true;
    }
    $.$mol_compare_any = $mol_compare_any;
})($ || ($ = {}));
//any.js.map
;
"use strict";
var $;
(function ($) {
    const cache = new WeakMap();
    $.$mol_conform_stack = [];
    function $mol_conform(target, source) {
        if ($.$mol_compare_any(target, source))
            return source;
        if (!target || typeof target !== 'object')
            return target;
        if (!source || typeof source !== 'object')
            return target;
        if (target instanceof Error)
            return target;
        if (source instanceof Error)
            return target;
        if (target['constructor'] !== source['constructor'])
            return target;
        if (cache.get(target))
            return target;
        cache.set(target, true);
        const conform = $.$mol_conform_handlers.get(target['constructor']);
        if (!conform)
            return target;
        if ($.$mol_conform_stack.indexOf(target) !== -1)
            return target;
        $.$mol_conform_stack.push(target);
        try {
            return conform(target, source);
        }
        finally {
            $.$mol_conform_stack.pop();
        }
    }
    $.$mol_conform = $mol_conform;
    $.$mol_conform_handlers = new WeakMap();
    function $mol_conform_handler(cl, handler) {
        $.$mol_conform_handlers.set(cl, handler);
    }
    $.$mol_conform_handler = $mol_conform_handler;
    function $mol_conform_array(target, source) {
        if (source.length !== target.length)
            return target;
        for (let i = 0; i < target.length; ++i) {
            if (!$.$mol_compare_any(source[i], target[i]))
                return target;
        }
        return source;
    }
    $mol_conform_handler(Array, $mol_conform_array);
    $mol_conform_handler(Uint8Array, $mol_conform_array);
    $mol_conform_handler(Uint16Array, $mol_conform_array);
    $mol_conform_handler(Uint32Array, $mol_conform_array);
    $mol_conform_handler(Object, (target, source) => {
        let count = 0;
        let equal = true;
        for (let key in target) {
            const conformed = $mol_conform(target[key], source[key]);
            if (conformed !== target[key]) {
                try {
                    target[key] = conformed;
                }
                catch (error) { }
                if (!$.$mol_compare_any(conformed, target[key]))
                    equal = false;
            }
            if (!$.$mol_compare_any(conformed, source[key]))
                equal = false;
            ++count;
        }
        for (let key in source)
            if (--count < 0)
                break;
        return (equal && count === 0) ? source : target;
    });
    $mol_conform_handler(Date, (target, source) => {
        if (target.getTime() === source.getTime())
            return source;
        return target;
    });
    $mol_conform_handler(RegExp, (target, source) => {
        if (target.toString() === source.toString())
            return source;
        return target;
    });
})($ || ($ = {}));
//conform.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//fail.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//hidden.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log(path, ...values) {
        if ($.$mol_log_filter() == null)
            return;
        path = String(path);
        if (path.indexOf($.$mol_log_filter()) === -1)
            return;
        const context = $.$mol_log_context();
        if (context)
            context();
        console.debug(path, ...values);
        if ($.$mol_log_debug() == null)
            return;
        if (path.indexOf($.$mol_log_debug()) === -1)
            return;
        debugger;
    }
    $.$mol_log = $mol_log;
})($ || ($ = {}));
//log.js.map
;
"use strict";
var $;
(function ($) {
    let context = null;
    function $mol_log_context(next = context) {
        return context = next;
    }
    $.$mol_log_context = $mol_log_context;
})($ || ($ = {}));
//log_context.js.map
;
"use strict";
var $;
(function ($) {
    let debug;
    function $mol_log_debug(next = debug) {
        return debug = next;
    }
    $.$mol_log_debug = $mol_log_debug;
})($ || ($ = {}));
//log_debug.node.js.map
;
"use strict";
var $;
(function ($) {
    let filter;
    $.$mol_log_filter = function $mol_log_filter(next = filter) {
        return filter = next;
    };
})($ || ($ = {}));
//log_filter.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log_group(name, task) {
        const filter = $.$mol_log_filter();
        if (filter == null)
            return task;
        return function $mol_log_group_wrapper(...args) {
            let started = false;
            let prev = $.$mol_log_context();
            $.$mol_log_context(() => {
                if (prev)
                    prev();
                started = true;
                if (filter || prev)
                    console.group(name);
                else
                    console.groupCollapsed(name);
                $.$mol_log_context(prev = null);
            });
            try {
                return task.apply(this, args);
            }
            finally {
                if (started)
                    console.groupEnd();
                $.$mol_log_context(prev);
            }
        };
    }
    $.$mol_log_group = $mol_log_group;
})($ || ($ = {}));
//log_group.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_defer extends $.$mol_object {
        constructor(run) {
            super();
            this.run = run;
            $mol_defer.add(this);
        }
        destructor() {
            $mol_defer.drop(this);
        }
        static schedule() {
            if (this.timer)
                return;
            this.timer = this.scheduleNative(() => {
                this.timer = null;
                this.run();
            });
        }
        static unschedule() {
            if (!this.timer)
                return;
            cancelAnimationFrame(this.timer);
            this.timer = null;
        }
        static add(defer) {
            this.all.push(defer);
            this.schedule();
        }
        static drop(defer) {
            var index = this.all.indexOf(defer);
            if (index >= 0)
                this.all.splice(index, 1);
        }
        static run() {
            if (this.all.length === 0)
                return;
            this.schedule();
            for (var defer; defer = this.all.shift();)
                defer.run();
        }
    }
    $mol_defer.all = [];
    $mol_defer.timer = null;
    $mol_defer.scheduleNative = (typeof requestAnimationFrame == 'function')
        ? handler => requestAnimationFrame(handler)
        : handler => setTimeout(handler, 16);
    $.$mol_defer = $mol_defer;
})($ || ($ = {}));
//defer.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_state_stack = new Map();
})($ || ($ = {}));
//stack.js.map
;
"use strict";
var $;
(function ($) {
    let $mol_atom_status;
    (function ($mol_atom_status) {
        $mol_atom_status["obsolete"] = "obsolete";
        $mol_atom_status["checking"] = "checking";
        $mol_atom_status["pulling"] = "pulling";
        $mol_atom_status["actual"] = "actual";
    })($mol_atom_status = $.$mol_atom_status || ($.$mol_atom_status = {}));
    function $mol_atom_fence(task) {
        const slave = $mol_atom.stack[0];
        $mol_atom.stack[0] = null;
        try {
            return task();
        }
        finally {
            $mol_atom.stack[0] = slave;
        }
    }
    $.$mol_atom_fence = $mol_atom_fence;
    class $mol_atom extends $.$mol_object {
        constructor(id, handler = next => next) {
            super();
            this.masters = null;
            this.slaves = null;
            this.status = $mol_atom_status.obsolete;
            this.object_id(id);
            this.handler = handler;
        }
        destructor() {
            this.unlink();
            this.status = $mol_atom_status.actual;
            const value = this['value()'];
            if (value instanceof $.$mol_object) {
                if (value.object_owner() === this)
                    value.destructor();
            }
            this['value()'] = undefined;
        }
        unlink() {
            this.disobey_all();
            if (this.slaves)
                this.check_slaves();
        }
        get(force) {
            const slave = $mol_atom.stack[0];
            if (slave) {
                this.lead(slave);
                slave.obey(this);
            }
            this.actualize(force);
            const value = this['value()'];
            if (typeof Proxy !== 'function' && value instanceof Error) {
                throw value;
            }
            return value;
        }
        actualize(force) {
            if (this.status === $mol_atom_status.pulling) {
                throw new Error(`Cyclic atom dependency of ${this}`);
            }
            if (!force && this.status === $mol_atom_status.actual)
                return;
            const slave = $mol_atom.stack[0];
            $mol_atom.stack[0] = this;
            if (!force && this.status === $mol_atom_status.checking) {
                this.masters.forEach(master => {
                    if (this.status !== $mol_atom_status.checking)
                        return;
                    master.actualize();
                });
                if (this.status === $mol_atom_status.checking) {
                    this.status = $mol_atom_status.actual;
                }
            }
            if (force || this.status !== $mol_atom_status.actual) {
                const oldMasters = this.masters;
                this.masters = null;
                if (oldMasters)
                    oldMasters.forEach(master => {
                        master.dislead(this);
                    });
                this.status = $mol_atom_status.pulling;
                const next = this.pull(force);
                if (next === undefined) {
                    this.status = $mol_atom_status.actual;
                }
                else {
                    this.push(next);
                }
            }
            $mol_atom.stack[0] = slave;
        }
        pull(force) {
            try {
                return this.handler(this._next, force);
            }
            catch (error) {
                if (error['$mol_atom_catched'])
                    return error;
                if (error instanceof $mol_atom_wait)
                    return error;
                console.error(error.stack || error);
                if (!(error instanceof Error)) {
                    error = new Error(error.message || error);
                }
                error['$mol_atom_catched'] = true;
                return error;
            }
        }
        set(next) {
            return this.value(next);
        }
        push(next_raw) {
            if (!(next_raw instanceof $mol_atom_wait)) {
                this._ignore = this._next;
                this._next = undefined;
            }
            this.status = next_raw === undefined ? $mol_atom_status.obsolete : $mol_atom_status.actual;
            const prev = this['value()'];
            let next = (next_raw instanceof Error || prev instanceof Error) ? next_raw : $.$mol_conform(next_raw, prev);
            if (next === prev)
                return prev;
            if (prev instanceof $.$mol_object) {
                if (prev.object_owner() === this)
                    prev.destructor();
            }
            if (next instanceof $.$mol_object) {
                next.object_owner(this);
            }
            if ((typeof Proxy === 'function') && (next instanceof Error)) {
                next = new Proxy(next, {
                    get(target) {
                        return $.$mol_fail_hidden(target.valueOf());
                    },
                    ownKeys(target) {
                        return $.$mol_fail_hidden(target.valueOf());
                    },
                });
            }
            this['value()'] = next;
            $.$mol_log(this, prev, '➔', next);
            this.obsolete_slaves();
            return next;
        }
        obsolete_slaves() {
            if (!this.slaves)
                return;
            this.slaves.forEach(slave => slave.obsolete());
        }
        check_slaves() {
            if (this.slaves) {
                this.slaves.forEach(slave => slave.check());
            }
            else {
                $mol_atom.actualize(this);
            }
        }
        check() {
            if (this.status === $mol_atom_status.actual || this.status === $mol_atom_status.pulling) {
                this.status = $mol_atom_status.checking;
                this.check_slaves();
            }
        }
        obsolete() {
            if (this.status === $mol_atom_status.obsolete)
                return;
            this.status = $mol_atom_status.obsolete;
            this.check_slaves();
            return;
        }
        lead(slave) {
            if (!this.slaves) {
                this.slaves = new Set();
                $mol_atom.unreap(this);
            }
            this.slaves.add(slave);
        }
        dislead(slave) {
            if (!this.slaves)
                return;
            if (this.slaves.size === 1) {
                this.slaves = null;
                $mol_atom.reap(this);
            }
            else {
                this.slaves.delete(slave);
            }
        }
        obey(master) {
            if (!this.masters)
                this.masters = new Set();
            this.masters.add(master);
        }
        disobey(master) {
            if (!this.masters)
                return;
            this.masters.delete(master);
        }
        disobey_all() {
            if (!this.masters)
                return;
            this.masters.forEach(master => master.dislead(this));
            this.masters = null;
        }
        cache(next) {
            if (next === undefined)
                return this['value()'];
            return this['value()'] = next;
        }
        value(next, force) {
            if (force === $mol_atom_force_cache)
                return this.push(next);
            if (next !== undefined) {
                if (force === $mol_atom_force)
                    return this.push(next);
                let next_normal = $.$mol_conform(next, this._ignore);
                if (next_normal === this._ignore)
                    return this.get(force);
                if (!(this['value()'] instanceof Error)) {
                    next_normal = $.$mol_conform(next, this['value()']);
                    if (next_normal === this['value()'])
                        return this.get(force);
                }
                this._next = next_normal;
                this._ignore = next_normal;
                force = $mol_atom_force_update;
            }
            return this.get(force);
        }
        static actualize(atom) {
            $mol_atom.updating.push(atom);
            $mol_atom.schedule();
        }
        static reap(atom) {
            $mol_atom.reaping.add(atom);
            $mol_atom.schedule();
        }
        static unreap(atom) {
            $mol_atom.reaping.delete(atom);
        }
        static schedule() {
            if (this.scheduled)
                return;
            new $.$mol_defer($.$mol_log_group('$mol_atom.sync()', () => {
                if (!this.scheduled)
                    return;
                this.scheduled = false;
                this.sync();
            }));
            this.scheduled = true;
        }
        static sync() {
            this.schedule();
            while (true) {
                const atom = this.updating.shift();
                if (!atom)
                    break;
                if (this.reaping.has(atom))
                    continue;
                if (atom.status !== $mol_atom_status.actual)
                    atom.get();
            }
            while (this.reaping.size) {
                this.reaping.forEach(atom => {
                    this.reaping.delete(atom);
                    if (!atom.slaves)
                        atom.destructor();
                });
            }
            this.scheduled = false;
        }
        then(done, fail) {
            let prev;
            let next;
            const atom = new $mol_atom(`${this}.then(${done})`, () => {
                try {
                    if (prev == undefined) {
                        const val = this.get();
                        if (val instanceof $mol_atom_wait)
                            return val;
                        if (val)
                            val['valueOf']();
                        prev = val;
                    }
                    if (next == undefined) {
                        const val = done(prev);
                        if (val instanceof $mol_atom_wait)
                            return val;
                        if (val)
                            val['valueOf']();
                        next = val;
                    }
                    return next;
                }
                catch (error) {
                    if (error instanceof $mol_atom_wait)
                        return error;
                    if (fail)
                        return fail(error);
                    return error;
                }
            });
            $mol_atom.actualize(atom);
            return atom;
        }
        catch(fail) {
            return this.then(next => next, fail);
        }
    }
    $mol_atom.stack = [];
    $mol_atom.updating = [];
    $mol_atom.reaping = new Set();
    $mol_atom.scheduled = false;
    $.$mol_atom = $mol_atom;
    $.$mol_state_stack.set('$mol_atom.stack', $mol_atom.stack);
    function $mol_atom_current() {
        return $mol_atom.stack[0];
    }
    $.$mol_atom_current = $mol_atom_current;
    class $mol_atom_wait extends Error {
        constructor() {
            super(...arguments);
            this.name = '$mol_atom_wait';
        }
    }
    $.$mol_atom_wait = $mol_atom_wait;
    class $mol_atom_force extends Object {
        static toString() { return this.name; }
    }
    $.$mol_atom_force = $mol_atom_force;
    class $mol_atom_force_cache extends $mol_atom_force {
    }
    $.$mol_atom_force_cache = $mol_atom_force_cache;
    class $mol_atom_force_update extends $mol_atom_force {
    }
    $.$mol_atom_force_update = $mol_atom_force_update;
})($ || ($ = {}));
//atom.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dict_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object')
            return JSON.stringify(value);
        if (value instanceof Array)
            return JSON.stringify(value);
        if (value.constructor === Object)
            return JSON.stringify(value);
        return value;
    }
    $.$mol_dict_key = $mol_dict_key;
    class $mol_dict extends Map {
        get(key) {
            return super.get($mol_dict_key(key));
        }
        has(key) {
            return super.has($mol_dict_key(key));
        }
        set(key, value) {
            return super.set($mol_dict_key(key), value);
        }
        delete(key) {
            return super.delete($mol_dict_key(key));
        }
        forEach(back, context) {
            return super.forEach((val, key, dict) => {
                if (typeof key === 'string')
                    key = JSON.parse(key);
                return back.call(this, val, key, dict);
            }, context);
        }
        [Symbol.iterator]() {
            const iterator = super[Symbol.iterator]();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    const iteration = iterator.next();
                    if (!iteration.done) {
                        const key = iteration.value[0];
                        if (typeof key === 'string')
                            iteration.value[0] = JSON.parse(key);
                    }
                    return iteration;
                }
            };
        }
    }
    $.$mol_dict = $mol_dict;
})($ || ($ = {}));
//dict.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_mem(obj, name, descr) {
        const value = descr.value;
        const store = new WeakMap();
        descr.value = function $mol_mem_value(next, force) {
            const host = this;
            let atom = store.get(host);
            if (!atom) {
                const id = `${host}.${name}()`;
                atom = new $.$mol_atom(id, function (...args) {
                    const v = value.call(host, ...args);
                    if (v instanceof $.$mol_object) {
                        if (!v.object_host()) {
                            v.object_host(host);
                            v.object_field(name);
                            v.object_id(id);
                        }
                    }
                    return v;
                });
                atom.object_owner(host);
                const destructor = atom.destructor;
                atom.destructor = () => {
                    store.delete(host);
                    destructor.call(atom);
                };
                store.set(host, atom);
            }
            return atom.value(next, force);
        };
        Object.defineProperty(obj, name + "()", { get: function () { return store.get(this); } });
        descr.value['value'] = value;
    }
    $.$mol_mem = $mol_mem;
    function $mol_mem_key(obj, name, descr) {
        const value = descr.value;
        const store = new WeakMap();
        descr.value = function $mol_mem_key_value(key, next, force) {
            const host = this;
            let dict = store.get(host);
            if (!dict)
                store.set(host, dict = new $.$mol_dict);
            let atom = dict.get(key);
            if (!atom) {
                const id = `${host}.${name}(${JSON.stringify(key)})`;
                atom = new $.$mol_atom(id, function (...args) {
                    const v = value.call(host, key, ...args);
                    if (v instanceof $.$mol_object) {
                        if (!v.object_host()) {
                            v.object_host(host);
                            v.object_field(name);
                            v.object_id(id);
                        }
                    }
                    return v;
                });
                const destructor = atom.destructor;
                atom.destructor = () => {
                    dict.delete(key);
                    destructor.call(atom);
                };
                dict.set(key, atom);
            }
            return atom.value(next, force);
        };
        Object.defineProperty(obj, name + "()", { get: function () { return store.get(this); } });
        void (descr.value['value'] = value);
    }
    $.$mol_mem_key = $mol_mem_key;
})($ || ($ = {}));
//mem.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_exec(dir, command, ...args) {
        let [app, ...args0] = command.split(' ');
        args = [...args0, ...args];
        console.info(`${$node.path.relative('', dir)}> ${app} ${args.join(' ')}`);
        var res = $node.child_process.spawnSync(app, args, {
            cwd: $node.path.resolve(dir),
            shell: true,
        });
        if (res.status || res.error)
            return $.$mol_fail(res.error || new Error(res.stderr));
        if (!res.stdout)
            res.stdout = '';
        return res;
    }
    $.$mol_exec = $mol_exec;
})($ || ($ = {}));
//exec.node.js.map
;
"use strict";
var $node = new Proxy({}, { get(target, name, wrapper) {
        try {
            require.resolve(name);
        }
        catch (error) {
            if (error.code !== 'MODULE_NOT_FOUND')
                return $.$mol_fail_hidden(error);
            $.$mol_exec('.', 'npm', 'install', name);
        }
        return require(name);
    } });
//node.node.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = new $node.jsdom.JSDOM('', { url: 'https://localhost/' }).window;
})($ || ($ = {}));
//context.node.js.map
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//context.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_view_selection extends $.$mol_object {
        static focused(next, force) {
            if (next === undefined)
                return [];
            const node = next[0];
            const atom = $.$mol_atom_current();
            new $.$mol_defer(() => {
                if (node)
                    return node.focus();
                const el = atom.cache()[0];
                if (el)
                    el.blur();
            });
            return undefined;
        }
        static position(next, force) {
            if (next !== undefined) {
                var start = next.start;
                var end = next.end;
                if (!(start <= end))
                    throw new Error(`Wrong offsets (${start},${end})`);
                var root = $.$mol_dom_context.document.getElementById(next.id);
                root.focus();
                var range = new Range;
                var cur = root.firstChild;
                while (cur !== root) {
                    while (cur.firstChild)
                        cur = cur.firstChild;
                    if (cur.nodeValue) {
                        var length = cur.nodeValue.length;
                        if (length >= start)
                            break;
                        start -= length;
                    }
                    while (!cur.nextSibling) {
                        cur = cur.parentNode;
                        if (cur === root) {
                            start = root.childNodes.length;
                            break;
                        }
                    }
                }
                range.setStart(cur, start);
                var cur = root.firstChild;
                while (cur !== root) {
                    while (cur.firstChild)
                        cur = cur.firstChild;
                    if (cur.nodeValue) {
                        var length = cur.nodeValue.length;
                        if (length >= end)
                            break;
                        end -= length;
                    }
                    while (!cur.nextSibling) {
                        cur = cur.parentNode;
                        if (cur === root) {
                            end = root.childNodes.length;
                            break;
                        }
                    }
                }
                range.setEnd(cur, end);
                var sel = $.$mol_dom_context.document.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
                return next;
            }
            else {
                var sel = $.$mol_dom_context.document.getSelection();
                if (sel.rangeCount === 0)
                    return null;
                var range = sel.getRangeAt(0);
                var el = range.commonAncestorContainer;
                while (el && !el.id)
                    el = el.parentElement;
                if (!el)
                    return { id: null, start: 0, end: 0 };
                var meter = new Range;
                meter.selectNodeContents(el);
                meter.setEnd(range.startContainer, range.startOffset);
                var startOffset = meter.toString().length;
                meter.setEnd(range.endContainer, range.endOffset);
                var endOffset = meter.toString().length;
                return { id: el.id, start: startOffset, end: endOffset };
            }
        }
        static onFocus(event) {
            const parents = [];
            let element = event.target;
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            this.focused(parents, $.$mol_atom_force_cache);
        }
        static onBlur(event) {
            const focused = this.focused();
            setTimeout($.$mol_log_group('$mol_view_selection blur', () => {
                if (focused !== this.focused())
                    return;
                this.focused([], $.$mol_atom_force_cache);
            }));
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_selection, "focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_view_selection, "position", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//selection.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false)
                el.removeAttribute(name);
            else
                el.setAttribute(name, String(val));
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//attributes.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events) {
        for (let name in events) {
            el.addEventListener(name, $.$mol_log_group(el.id + ' ' + name, events[name]), { passive: false });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
    function $mol_dom_render_events_async(el, events) {
        for (let name in events) {
            el.addEventListener(name, $.$mol_log_group(el.id + ' ' + name, events[name]), { passive: true });
        }
    }
    $.$mol_dom_render_events_async = $mol_dom_render_events_async;
})($ || ($ = {}));
//events.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_list = [];
        const node_set = new Set();
        for (let i = 0; i < childNodes.length; ++i) {
            let node = childNodes[i];
            if (node == null)
                continue;
            if (Object(node) === node) {
                if (node['dom_tree'])
                    node = node['dom_tree']();
                node_list.push(node);
                node_set.add(node);
            }
            else {
                node_list.push(String(node));
            }
        }
        let nextNode = el.firstChild;
        for (let view_ of node_list) {
            const view = view_.valueOf();
            if (view instanceof $.$mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $.$mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//children.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const cur = style[name];
            if (typeof val === 'number') {
                if (parseFloat(cur) == val)
                    continue;
                style[name] = `${val}px`;
            }
            if (cur !== val)
                style[name] = val;
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//styles.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//fields.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_func_name(func) {
        return func.name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//name.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    let $$;
    (function ($$_1) {
        let $$;
    })($$ = $.$$ || ($.$$ = {}));
    let $mol;
    (function ($mol_1) {
        let $mol;
    })($mol = $.$mol || ($.$mol = {}));
    function $mol_view_visible_width() {
        return $.$mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $.$mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    class $mol_view extends $.$mol_object {
        static Root(id) {
            return new this;
        }
        static autobind() {
            const nodes = $.$mol_dom_context.document.querySelectorAll('[mol_view_root]');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_tree(nodes.item(i));
                document.title = view.title();
            }
        }
        title() {
            return this.constructor.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $.$mol_view_selection.focused(next === undefined ? undefined : next ? [node] : []) || [];
            return value.indexOf(node) !== -1;
        }
        context(next) {
            return next || $;
        }
        get $() {
            return this.context();
        }
        set $(next) {
            this.context(next);
        }
        context_sub() {
            return this.context();
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return this.constructor.toString().replace('$', '');
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return null;
        }
        sub_visible() {
            const sub = this.sub();
            if (!sub)
                return sub;
            const context = this.context_sub();
            sub.forEach(child => {
                if (child instanceof $mol_view) {
                    child.$ = context;
                }
            });
            return sub;
        }
        minimal_width() {
            const sub = this.sub();
            if (!sub)
                return 0;
            let min = 0;
            sub.forEach(view => {
                if (view instanceof $mol_view) {
                    min = Math.max(min, view.minimal_width());
                }
            });
            return min;
        }
        minimal_height() {
            return this.content_height();
        }
        content_height() {
            const sub = this.sub();
            if (!sub)
                return 0;
            let min = 0;
            sub.forEach(view => {
                if (view instanceof $mol_view) {
                    min = Math.max(min, view.minimal_height());
                }
            });
            return min;
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            const node = next || this.$.$mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            node.setAttribute('id', this.dom_id());
            $.$mol_dom_render_attributes(node, this.attr_static());
            $.$mol_dom_render_events(node, this.event());
            $.$mol_dom_render_events_async(node, this.event_async());
            return node;
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            try {
                for (let plugin of this.plugins()) {
                    plugin.dom_node(node);
                    plugin.render();
                }
                this.render();
            }
            catch (error) {
                $.$mol_dom_render_attributes(node, { mol_view_error: error.name });
                if (error instanceof $.$mol_atom_wait)
                    return node;
                try {
                    void (node.innerText = error.message);
                }
                catch (e) { }
                if (error['$mol_atom_catched'])
                    return node;
                console.error(error);
                error['$mol_atom_catched'] = true;
            }
            return node;
        }
        render() {
            const node = this.dom_node();
            const sub = this.sub_visible();
            if (sub)
                $.$mol_dom_render_children(node, sub);
            $.$mol_dom_render_attributes(node, this.attr());
            $.$mol_dom_render_styles(node, this.style());
            const fields = this.field();
            $.$mol_dom_render_fields(node, fields);
            new $.$mol_defer(() => $.$mol_dom_render_fields(node, fields));
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                classes.push(current.constructor);
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        view_names_owned() {
            const names = [];
            let owner = this.object_host();
            if (owner instanceof $mol_view) {
                const suffix = this.object_field();
                const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
                for (let Class of owner.constructor.view_classes()) {
                    if (suffix in Class.prototype)
                        names.push($.$mol_func_name(Class) + suffix2);
                    else
                        break;
                }
                for (let prefix of owner.view_names_owned()) {
                    names.push(prefix + suffix2);
                }
            }
            return names;
        }
        view_names() {
            const names = [];
            for (let name of this.view_names_owned()) {
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            for (let Class of this.constructor.view_classes()) {
                const name = $.$mol_func_name(Class);
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {
                'mol_view_error': false,
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return {};
        }
        plugins() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "context", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "content_height", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $.$mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $.$mol_mem
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $.$mol_view {
        sub() {
            return this.rows();
        }
        rows() {
            return [].concat();
        }
        Empty() {
            return null;
        }
    }
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//list.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            row_offsets() {
                var sub = this.sub();
                if (!sub)
                    return null;
                let heightLimit = this.$.$mol_view_visible_height();
                var offset = 0;
                var next = [];
                for (let child of sub) {
                    next.push(offset);
                    if (child instanceof $.$mol_view) {
                        offset += child.minimal_height();
                    }
                    if (offset > heightLimit)
                        break;
                }
                return next;
            }
            row_context(index) {
                return this.$.$mol_ambient({
                    $mol_view_visible_height: () => this.$.$mol_view_visible_height() - this.row_offsets()[index],
                });
            }
            sub_visible() {
                var sub = this.sub();
                if (!sub)
                    return sub;
                var limit = this.row_offsets().length;
                var next = [];
                for (let i = 0; i < limit; ++i) {
                    const child = sub[i];
                    if (child == null)
                        continue;
                    if (child instanceof $.$mol_view) {
                        child.$ = this.row_context(i);
                    }
                    next.push(child);
                }
                return next;
            }
            minimal_height() {
                var height = 0;
                var sub = this.sub();
                if (sub)
                    sub.forEach(child => {
                        if (child instanceof $.$mol_view) {
                            height += child.minimal_height();
                        }
                    });
                return height;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "row_offsets", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_list.prototype, "row_context", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_scroll extends $.$mol_view {
        minimal_height() {
            return 0;
        }
        moving_hor(val, force) {
            return (val !== void 0) ? val : false;
        }
        moving_vert(val, force) {
            return (val !== void 0) ? val : false;
        }
        field() {
            return (Object.assign(Object.assign({}, super.field()), { "scrollTop": this.scroll_top(), "scrollLeft": this.scroll_left(), "scrollBottom": this.scroll_bottom(), "scrollRight": this.scroll_right() }));
        }
        scroll_top(val, force) {
            return (val !== void 0) ? val : 0;
        }
        scroll_left(val, force) {
            return (val !== void 0) ? val : 0;
        }
        scroll_bottom(val, force) {
            return (val !== void 0) ? val : 0;
        }
        scroll_right(val, force) {
            return (val !== void 0) ? val : 0;
        }
        event_async() {
            return (Object.assign(Object.assign({}, super.event_async()), { "scroll": (event) => this.event_scroll(event) }));
        }
        event_scroll(event, force) {
            return (event !== void 0) ? event : null;
        }
        Strut() {
            return ((obj) => {
                obj.style = () => ({
                    "transform": this.strut_transform(),
                });
                return obj;
            })(new this.$.$mol_view());
        }
        strut_transform() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "moving_hor", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "moving_vert", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "Strut", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//scroll.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        function $mol_scroll_top() {
            return 0;
        }
        $$.$mol_scroll_top = $mol_scroll_top;
        function $mol_scroll_left() {
            return 0;
        }
        $$.$mol_scroll_left = $mol_scroll_left;
        function $mol_scroll_moving() {
            return false;
        }
        $$.$mol_scroll_moving = $mol_scroll_moving;
        function $mol_scroll_moving_vert() {
            return false;
        }
        $$.$mol_scroll_moving_vert = $mol_scroll_moving_vert;
        function $mol_scroll_moving_hor() {
            return false;
        }
        $$.$mol_scroll_moving_hor = $mol_scroll_moving_hor;
        class $mol_scroll extends $.$mol_scroll {
            constructor() {
                super(...arguments);
                this._moving_task_timer = null;
            }
            scroll_bottom(next) {
                return next || 0;
            }
            scroll_right(next) {
                return next || 0;
            }
            event_scroll(next) {
                this.moving_vert(this.scroll_top() !== this.dom_node().scrollTop);
                this.moving_hor(this.scroll_left() !== this.dom_node().scrollLeft);
                this.moving_task_stop();
                new $.$mol_defer($.$mol_log_group(`${this}.event_scroll()`, () => {
                    const el = this.dom_node();
                    const top = Math.max(0, el.scrollTop);
                    const left = Math.max(0, el.scrollLeft);
                    this.scroll_top(top);
                    this.scroll_left(left);
                    this.scroll_bottom(Math.max(0, el.scrollHeight - top - el.offsetHeight));
                    this.scroll_right(Math.max(0, el.scrollWidth - left - el.offsetWidth));
                }));
            }
            event_repos(next) {
                new $.$mol_defer(() => {
                    const el = this.dom_node();
                    this.scroll_bottom(Math.max(0, el.scrollHeight - this.scroll_top() - el.offsetHeight));
                    this.scroll_right(Math.max(0, el.scrollWidth - this.scroll_left() - el.offsetWidth));
                });
            }
            moving_task_stop() {
                clearTimeout(this._moving_task_timer);
                this._moving_task_timer = setTimeout($.$mol_log_group(`${this}.moving_task_stop()`, () => {
                    this.moving_vert(false);
                    this.moving_hor(false);
                }), 50);
            }
            moving() {
                return this.moving_hor() || this.moving_vert();
            }
            context_sub() {
                return this.$.$mol_ambient({
                    $mol_view_visible_height: () => {
                        const sizeWin = $.$mol_window.size();
                        const limit = this.$.$mol_view_visible_height();
                        return this.scroll_top() + Math.min(sizeWin.height, limit);
                    },
                    $mol_view_visible_width: () => {
                        const sizeWin = $.$mol_window.size();
                        const limit = this.$.$mol_view_visible_width();
                        return this.scroll_left() + Math.min(sizeWin.width, limit);
                    },
                    $mol_scroll_top: () => this.scroll_top(),
                    $mol_scroll_left: () => this.scroll_left(),
                    $mol_scroll_moving: () => this.moving(),
                    $mol_scroll_moving_vert: () => this.moving_vert(),
                    $mol_scroll_moving_hor: () => this.moving_hor(),
                });
            }
            strut_transform() {
                try {
                    return `translate3d( 0 , ${this.content_height()}px , 0 )`;
                }
                catch (error) {
                    return '';
                }
            }
            sub_visible() {
                const sub = [
                    this.Strut(),
                    ...(this.sub() || []),
                ];
                const context = this.context_sub();
                sub.forEach(child => {
                    if (child instanceof $.$mol_view) {
                        child.$ = context;
                    }
                });
                return sub;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_bottom", null);
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_right", null);
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "context_sub", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_float extends $.$mol_view {
    }
    $.$mol_float = $mol_float;
})($ || ($ = {}));
//float.view.tree.js.map
;
"use strict";
//code.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_button extends $.$mol_view {
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        click(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_click(event, force) {
            return (event !== void 0) ? event : null;
        }
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "click": (event) => this.event_activate(event), "keypress": (event) => this.event_key_press(event) }));
        }
        event_activate(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_key_press(event, force) {
            return (event !== void 0) ? event : null;
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "disabled": this.disabled(), "role": "button", "tabindex": this.tab_index(), "title": this.hint() }));
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        sub() {
            return [].concat(this.title());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//button.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                this.event_click(next);
                this.click(next);
            }
            event_key_press(event) {
                if (event.keyCode === 13) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : null;
            }
        }
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//button.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $.$mol_button {
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
(function ($) {
    class $mol_button_major extends $.$mol_button_typed {
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_theme": "$mol_theme_accent" }));
        }
    }
    $.$mol_button_major = $mol_button_major;
})($ || ($ = {}));
(function ($) {
    class $mol_button_minor extends $.$mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//button_types.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_check extends $.$mol_button_minor {
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_check_checked": this.checked(), "aria-checked": this.checked(), "role": "checkbox" }));
        }
        checked(val, force) {
            return (val !== void 0) ? val : false;
        }
        sub() {
            return [].concat(this.Icon(), this.label());
        }
        Icon() {
            return null;
        }
        label() {
            return [].concat(this.Title());
        }
        Title() {
            return ((obj) => {
                obj.sub = () => [].concat(this.title());
                return obj;
            })(new this.$.$mol_view());
        }
        title() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//check.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            event_click(next) {
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//check.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_state_time extends $.$mol_object {
        static now(precision, next, force) {
            const atom = $.$mol_atom_current();
            const handler = () => {
                atom['value()'] = Date.now();
                atom.obsolete_slaves();
                if (precision > 0) {
                    setTimeout(handler, precision);
                }
                else {
                    requestAnimationFrame(handler);
                }
            };
            handler();
            return Date.now();
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//time.js.map
;
"use strict";
var $;
(function ($) {
    let canvas;
    function $mol_font_canvas(next = canvas) {
        if (!next)
            next = $.$mol_dom_context.document.createElement('canvas').getContext('2d');
        return canvas = next;
    }
    $.$mol_font_canvas = $mol_font_canvas;
})($ || ($ = {}));
//canvas.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_font_measure(size, face, text) {
        const canvas = $.$mol_font_canvas();
        canvas.font = size + 'px ' + face;
        return Math.ceil(canvas.measureText(text).width);
    }
    $.$mol_font_measure = $mol_font_measure;
})($ || ($ = {}));
//measure.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_svg extends $.$mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        text_width(text, force) {
            return (text !== void 0) ? text : 0;
        }
        font_size() {
            return 16;
        }
        font_family() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_svg.prototype, "text_width", null);
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//svg.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $.$mol_state_time.now();
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
            text_width(text) {
                return $.$mol_font_measure(this.font_size(), this.font_family(), text);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//svg.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $.$mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "viewBox": this.view_box(), "preserveAspectRatio": this.aspect() }));
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//root.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $.$mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "d": this.geometry() }));
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//path.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_icon extends $.$mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        sub() {
            return [].concat(this.Path());
        }
        Path() {
            return ((obj) => {
                obj.geometry = () => this.path();
                return obj;
            })(new this.$.$mol_svg_path());
        }
        path() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_tick extends $.$mol_icon {
        path() {
            return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
        }
    }
    $.$mol_icon_tick = $mol_icon_tick;
})($ || ($ = {}));
//tick.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_check_box extends $.$mol_check {
        Icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_tick());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_box.prototype, "Icon", null);
    $.$mol_check_box = $mol_check_box;
})($ || ($ = {}));
//box.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron extends $.$mol_icon {
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//chevron.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_check_expand extends $.$mol_check {
        minimal_height() {
            return 32;
        }
        Icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_chevron());
        }
        level() {
            return 0;
        }
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "paddingLeft": this.level_style() }));
        }
        level_style() {
            return "0px";
        }
        checked(val, force) {
            return this.expanded(val);
        }
        expanded(val, force) {
            return (val !== void 0) ? val : false;
        }
        enabled() {
            return this.expandable();
        }
        expandable() {
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "Icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "expanded", null);
    $.$mol_check_expand = $mol_check_expand;
})($ || ($ = {}));
//expand.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1.25 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//expand.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_dimmer extends $.$mol_view {
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        parts() {
            return [].concat();
        }
        Low(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.string(id));
                return obj;
            })(new this.$.$mol_view());
        }
        string(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//dimmer.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (!needle)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? strings[index] : this.Low(index));
                }
                return chunks;
            }
            strings() {
                return this.haystack().split(new RegExp(`(${this.needle()})`, 'gi'));
            }
            string(index) {
                return this.strings()[index];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dimmer.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_state_session extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//session.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_grid extends $.$mol_scroll {
        row_ids() {
            return [].concat();
        }
        row_id(index) {
            return null;
        }
        col_ids() {
            return [].concat();
        }
        records() {
            return ({});
        }
        record(id) {
            return null;
        }
        hierarchy() {
            return null;
        }
        hierarchy_col() {
            return "";
        }
        sub() {
            return [].concat(this.Table());
        }
        Table() {
            return ((obj) => {
                obj.offset = () => this.gap_top();
                obj.sub = () => [].concat(this.rows_visible());
                return obj;
            })(new this.$.$mol_grid_table());
        }
        gap_top() {
            return 0;
        }
        rows_visible() {
            return [].concat();
        }
        rows() {
            return [].concat();
        }
        Head() {
            return ((obj) => {
                obj.height = () => this.row_height();
                obj.cells = () => this.head_cells();
                return obj;
            })(new this.$.$mol_grid_row());
        }
        row_height() {
            return 40;
        }
        head_cells() {
            return [].concat();
        }
        Row(id) {
            return ((obj) => {
                obj.height = () => this.row_height();
                obj.cells = () => this.cells(id);
                return obj;
            })(new this.$.$mol_grid_row());
        }
        cells(id) {
            return [].concat();
        }
        Cell(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_view());
        }
        cell(id) {
            return null;
        }
        Cell_text(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.cell_content_text(id));
                return obj;
            })(new this.$.$mol_grid_cell());
        }
        cell_content_text(id) {
            return this.cell_content(id);
        }
        cell_content(id) {
            return [].concat();
        }
        Cell_number(id) {
            return ((obj) => {
                obj.sub = () => [].concat(this.cell_content_number(id));
                return obj;
            })(new this.$.$mol_grid_number());
        }
        cell_content_number(id) {
            return this.cell_content(id);
        }
        Col_head(id) {
            return ((obj) => {
                obj.dom_name = () => "th";
                obj.sub = () => [].concat(this.col_head_content(id));
                return obj;
            })(new this.$.$mol_float());
        }
        col_head_content(id) {
            return [].concat();
        }
        Cell_branch(id) {
            return ((obj) => {
                obj.level = () => this.cell_level(id);
                obj.label = () => this.cell_content(id);
                obj.expanded = (val) => this.cell_expanded(id, val);
                return obj;
            })(new this.$.$mol_check_expand());
        }
        cell_level(id) {
            return 0;
        }
        cell_expanded(id, val, force) {
            return (val !== void 0) ? val : false;
        }
        Cell_content(id) {
            return [].concat(this.Cell_dimmer(id));
        }
        Cell_dimmer(id) {
            return ((obj) => {
                obj.needle = () => this.needle();
                obj.haystack = () => this.cell_value(id);
                return obj;
            })(new this.$.$mol_dimmer());
        }
        needle() {
            return "";
        }
        cell_value(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Table", null);
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_text", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_number", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Col_head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_branch", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "cell_expanded", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_dimmer", null);
    $.$mol_grid = $mol_grid;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_table extends $.$mol_view {
        dom_name() {
            return "table";
        }
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "top": this.offset() }));
        }
        offset() {
            return 0;
        }
    }
    $.$mol_grid_table = $mol_grid_table;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_gap extends $.$mol_view {
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "top": this.offset() }));
        }
        offset() {
            return 0;
        }
    }
    $.$mol_grid_gap = $mol_grid_gap;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_row extends $.$mol_view {
        dom_name() {
            return "tr";
        }
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "height": this.height() }));
        }
        height() {
            return 40;
        }
        sub() {
            return this.cells();
        }
        cells() {
            return [].concat();
        }
    }
    $.$mol_grid_row = $mol_grid_row;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_cell extends $.$mol_view {
        dom_name() {
            return "td";
        }
    }
    $.$mol_grid_cell = $mol_grid_cell;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_number extends $.$mol_grid_cell {
    }
    $.$mol_grid_number = $mol_grid_number;
})($ || ($ = {}));
//grid.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
            rows_visible() {
                const rows = this.rows();
                if (!rows)
                    return null;
                const view_window = this.view_window();
                return [].concat(this.Head(), rows.slice(view_window.top, view_window.bottom).valueOf());
            }
            rows_visible_max() {
                return Math.ceil(this.$.$mol_view_visible_height() / this.row_height());
            }
            view_window() {
                const rows = this.rows();
                if (!rows)
                    return null;
                const count = rows.length;
                const context = this.context_sub();
                const scrollTop = context.$mol_scroll_top();
                const top = Math.max(0, Math.floor(scrollTop / this.row_height()) - 1);
                const bottom = Math.min(count, top + this.rows_visible_max());
                return { top, bottom, count };
            }
            gap_top() {
                const view_window = this.view_window();
                return view_window.top * this.row_height();
            }
            height() {
                const view_window = this.view_window();
                return view_window.count * this.row_height();
            }
            content_height() {
                return this.rows().length * this.row_height();
            }
            head_cells() {
                return this.col_ids().map(colId => this.Col_head(colId));
            }
            col_head_content(colId) {
                return [colId];
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
            cells(row_id) {
                return this.col_ids().map(col_id => this.Cell({ row: row_id, col: col_id }));
            }
            col_type(col_id) {
                if (col_id === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col_id];
                if (typeof val === 'number')
                    return 'number';
                return 'text';
            }
            Cell(id) {
                switch (this.col_type(id.col).valueOf()) {
                    case 'branch': return this.Cell_branch(id);
                    case 'number': return this.Cell_number(id);
                }
                return this.Cell_text(id);
            }
            cell_content(id) {
                return [this.record(id.row[id.row.length - 1])[id.col]];
            }
            records() {
                return [];
            }
            record(id) {
                return this.records()[id];
            }
            record_ids() {
                return Object.keys(this.records());
            }
            row_id(index) {
                return this.row_ids().slice(index, index + 1).valueOf()[0];
            }
            col_ids() {
                const rowFirst = this.row_id(0);
                if (rowFirst === void 0)
                    return [];
                const record = this.record(rowFirst[rowFirst.length - 1]);
                if (!record)
                    return [];
                return Object.keys(record);
            }
            hierarchy() {
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                this.record_ids().map(id => {
                    root.sub.push(hierarchy[id] = {
                        id,
                        parent: root,
                        sub: [],
                    });
                });
                return hierarchy;
            }
            row_sub_ids(row) {
                return this.hierarchy()[row[row.length - 1]].sub.map(child => row.concat(child.id));
            }
            row_root_id() {
                return [''];
            }
            cell_level(id) {
                return id.row.length - 1;
            }
            row_ids() {
                const next = [];
                const add = (row) => {
                    next.push(row);
                    if (this.row_expanded(row)) {
                        this.row_sub_ids(row).forEach(child => add(child));
                    }
                };
                this.row_sub_ids(this.row_root_id()).forEach(child => add(child));
                return next;
            }
            row_expanded(row_id, next) {
                if (!this.row_sub_ids(row_id).length)
                    return null;
                const key = `row_expanded(${JSON.stringify(row_id)})`;
                const next2 = $.$mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return row_id.length < 3;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows_visible", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows_visible_max", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "view_window", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
        class $mol_grid_table extends $.$mol_grid_table {
            context_sub() {
                return this.$.$mol_ambient({
                    $mol_scroll_top: () => this.$.$mol_scroll_top() - this.offset(),
                });
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_grid_table.prototype, "context_sub", null);
        $$.$mol_grid_table = $mol_grid_table;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//grid.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_state_arg extends $.$mol_object {
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        static href(next) {
            return next || process.argv.slice(2).join(' ');
        }
        static dict(next) {
            if (next !== void 0)
                this.href(this.make_link(next));
            var href = this.href();
            var chunks = href.split(' ');
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static value(key, next) {
            if (next === void 0)
                return this.dict()[key] || null;
            this.href(this.link({ [key]: next }));
            return next;
        }
        static link(next) {
            var params = {};
            var prev = this.dict();
            for (var key in prev) {
                params[key] = prev[key];
            }
            for (var key in next) {
                params[key] = next[key];
            }
            return this.make_link(params);
        }
        static make_link(next) {
            var chunks = [];
            for (var key in next) {
                if (null == next[key])
                    continue;
                chunks.push([key].concat(next[key]).map(encodeURIComponent).join('='));
            }
            return chunks.join(' ');
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_state_arg, "value", null);
    $.$mol_state_arg = $mol_state_arg;
})($ || ($ = {}));
//arg.node.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_link extends $.$mol_view {
        minimal_height() {
            return 40;
        }
        dom_name() {
            return "a";
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "href": this.uri(), "title": this.hint(), "target": this.target(), "download": this.file_name(), "mol_link_current": this.current() }));
        }
        uri() {
            return "";
        }
        hint() {
            return "";
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        sub() {
            return [].concat(this.title());
        }
        arg() {
            return ({});
        }
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "click": (event) => this.click(event) }));
        }
        click(event, force) {
            return this.event_click(event);
        }
        event_click(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link.prototype, "click", null);
    __decorate([
        $.$mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//link.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            current() {
                if (this.uri() === this.$.$mol_state_arg.href())
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) !== args[key])
                        return false;
                }
                return true;
            }
            event_click(event) {
                if (!event || event.defaultPrevented)
                    return;
                setTimeout($.$mol_log_group(`${this}.event_click()`, () => this.focused(false)), 50);
            }
            file_name() {
                return null;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//link.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_image extends $.$mol_view {
        dom_name() {
            return "img";
        }
        field() {
            return (Object.assign(Object.assign({}, super.field()), { "src": this.uri(), "alt": this.title() }));
        }
        uri() {
            return "";
        }
    }
    $.$mol_image = $mol_image;
})($ || ($ = {}));
//image.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_link_iconed extends $.$mol_link {
        sub() {
            return [].concat(this.Icon(), this.content());
        }
        Icon() {
            return ((obj) => {
                obj.uri = () => this.icon();
                return obj;
            })(new this.$.$mol_image());
        }
        icon() {
            return "";
        }
        content() {
            return [].concat(this.title());
        }
        title() {
            return this.uri();
        }
        host() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link_iconed.prototype, "Icon", null);
    $.$mol_link_iconed = $mol_link_iconed;
})($ || ($ = {}));
//iconed.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link_iconed extends $.$mol_link_iconed {
            icon() {
                return `https://favicon.yandex.net/favicon/${this.host()}?color=0,0,255,0&size=32`;
            }
            host() {
                const url = new URL(this.uri());
                return url.hostname;
            }
            title() {
                return decodeURIComponent(this.uri().split(this.host(), 2)[1]);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link_iconed.prototype, "host", null);
        __decorate([
            $.$mol_mem
        ], $mol_link_iconed.prototype, "title", null);
        $$.$mol_link_iconed = $mol_link_iconed;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//iconed.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_syntax {
        constructor(lexems) {
            this['lexems()'] = lexems;
        }
        lexems() {
            return this['lexems()'];
        }
        rules() {
            let rules = this['rules()'];
            if (rules)
                return rules;
            rules = [];
            let lexems = this.lexems();
            for (let name in lexems) {
                rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            return this['rules()'] = rules;
        }
        regExp() {
            let regExp = this['regExp()'];
            if (regExp)
                return regExp;
            const parts = '(' + this.rules().map(rule => rule.regExp.source).join(')|(') + ')';
            regExp = RegExp(`([^]*?)(?:(${parts})|$(?![^]))`, 'gm');
            return this['regExp()'] = regExp;
        }
        tokenize(text) {
            const tokens = [];
            const rules = this.rules();
            const regExp = this.regExp();
            const regExpSize = RegExp('^$|' + regExp.source).exec('').length - 1;
            let position = 0;
            parsing: while (position < text.length) {
                regExp.lastIndex = position;
                var found = regExp.exec(text);
                if (position === regExp.lastIndex)
                    throw new Error('Empty token');
                position = regExp.lastIndex;
                var prefix = found[1];
                if (prefix) {
                    tokens.push({
                        name: '',
                        found: prefix,
                        chunks: [],
                    });
                }
                var suffix = found[2];
                if (suffix) {
                    let offset = 4;
                    for (let rule of rules) {
                        if (found[offset - 1]) {
                            tokens.push({
                                name: rule.name,
                                found: suffix,
                                chunks: found.slice(offset, offset + rule.size)
                            });
                            continue parsing;
                        }
                        offset += rule.size + 1;
                    }
                    throw new Error('Something wrong');
                }
            }
            return tokens;
        }
    }
    $.$mol_syntax = $mol_syntax;
})($ || ($ = {}));
//syntax.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_syntax_md_flow = new $.$mol_syntax({
        'quote': /^((?:(?:> )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^(#+)(\s*)(.*?)$([\n\r]*)/,
        'list': /^((?:(?:\s?[*+-]|\d+\.)\s+(?:[^]*?)$(?:\r?\n?))+)((?:\r?\n)*)/,
        'code': /^(```\s*)(\w*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?:  |\t)(?:[^]*?)$([\n\r]*))+)/,
        'table': /((?:^\|.+?$\r?\n)+)([\n\r]*)/,
        'block': /^(.*?(?:\r?\n.+?)*)$((?:\r?\n)*)/,
    });
    $.$mol_syntax_md_line = new $.$mol_syntax({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*/,
        'code3': /```(.+?)```/,
        'code': /`(.+?)`/,
        'strike': /~~(.+?)~~/,
        'text-link': /\[(.*?(?:\[.*?\].*?)*)\]\((.*?)\)/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
    });
    $.$mol_syntax_md_code = new $.$mol_syntax({
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /\w+:\/\/\S*/,
        'code-comment-inline': /\/\/.*?$/,
        'code-string': /(?:".*?"|'.*?'|`.*?`|\/.+?\/[gmi]*|(?:^|[ \t])\\[^\n]*\n)/,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-call': /\.?\w+(?=\()/,
        'code-field': /(?:\.\w+|[\w-]+\??\s*:(?!\/\/))/,
        'code-keyword': /\b(class|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|let|const|for|do|while|until|in|of|new|if|then|else|switch|case|this|return|async|await|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void)\b/,
        'code-global': /[$]\w*/,
        'code-decorator': /@\s*\S+/,
        'code-tag': /<\/?[\w-]+\/?>?/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>`~!\?@#\$%&\*_\+\\\/\|'";:\.,\^]/,
    });
})($ || ($ = {}));
//md.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_text extends $.$mol_list {
        uri_base() {
            return "";
        }
        text() {
            return "";
        }
        tokens() {
            return [].concat();
        }
        Quote(id) {
            return ((obj) => {
                obj.text = () => this.quote_text(id);
                return obj;
            })(new this.$.$mol_text());
        }
        quote_text(id) {
            return "";
        }
        Row(id) {
            return ((obj) => {
                obj.sub = () => this.block_content(id);
                obj.type = () => this.block_type(id);
                return obj;
            })(new this.$.$mol_text_row());
        }
        block_content(id) {
            return [].concat();
        }
        block_type(id) {
            return "";
        }
        Span(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_span());
        }
        Link(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_link());
        }
        Image(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_image());
        }
        Header(id) {
            return ((obj) => {
                obj.level = () => this.header_level(id);
                obj.content = () => this.header_content(id);
                return obj;
            })(new this.$.$mol_text_header());
        }
        header_level(id) {
            return 0;
        }
        header_content(id) {
            return [].concat();
        }
        Table(id) {
            return ((obj) => {
                obj.head_cells = () => this.table_head_cells(id);
                obj.rows = () => this.table_rows(id);
                return obj;
            })(new this.$.$mol_grid());
        }
        table_head_cells(id) {
            return [].concat();
        }
        table_rows(id) {
            return [].concat();
        }
        Table_row(id) {
            return ((obj) => {
                obj.cells = () => this.table_cells(id);
                return obj;
            })(new this.$.$mol_grid_row());
        }
        table_cells(id) {
            return [].concat();
        }
        Table_cell(id) {
            return ((obj) => {
                obj.sub = () => this.table_cell_content(id);
                return obj;
            })(new this.$.$mol_grid_cell());
        }
        table_cell_content(id) {
            return [].concat();
        }
        Table_cell_head(id) {
            return ((obj) => {
                obj.sub = () => this.table_cell_content(id);
                return obj;
            })(new this.$.$mol_float());
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Quote", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Span", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Link", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Image", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Header", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell_head", null);
    $.$mol_text = $mol_text;
})($ || ($ = {}));
(function ($) {
    class $mol_text_row extends $.$mol_view {
        minimal_height() {
            return 40;
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_text_type": this.type() }));
        }
        type() {
            return "";
        }
    }
    $.$mol_text_row = $mol_text_row;
})($ || ($ = {}));
(function ($) {
    class $mol_text_header extends $.$mol_view {
        dom_name() {
            return "h";
        }
        minimal_height() {
            return 50;
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_text_header_level": this.level() }));
        }
        level(val, force) {
            return (val !== void 0) ? val : 0;
        }
        sub() {
            return this.content();
        }
        content() {
            return [].concat();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_header.prototype, "level", null);
    $.$mol_text_header = $mol_text_header;
})($ || ($ = {}));
(function ($) {
    class $mol_text_span extends $.$mol_view {
        dom_name() {
            return "span";
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_text_type": this.type() }));
        }
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        sub() {
            return this.content();
        }
        content(val, force) {
            return (val !== void 0) ? val : [].concat();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "content", null);
    $.$mol_text_span = $mol_text_span;
})($ || ($ = {}));
(function ($) {
    class $mol_text_link extends $.$mol_link_iconed {
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_text_type": this.type() }));
        }
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        uri() {
            return this.link();
        }
        link(val, force) {
            return (val !== void 0) ? val : "";
        }
        content(val, force) {
            return (val !== void 0) ? val : [].concat();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "link", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "content", null);
    $.$mol_text_link = $mol_text_link;
})($ || ($ = {}));
(function ($) {
    class $mol_text_image extends $.$mol_view {
        dom_name() {
            return "object";
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "allowfullscreen": true, "mol_text_type": this.type(), "data": this.link() }));
        }
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        link(val, force) {
            return (val !== void 0) ? val : "";
        }
        sub() {
            return [].concat(this.title());
        }
        title(val, force) {
            return (val !== void 0) ? val : "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "link", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "title", null);
    $.$mol_text_image = $mol_text_image;
})($ || ($ = {}));
//text.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text extends $.$mol_text {
            tokens() {
                return this.$.$mol_syntax_md_flow.tokenize(this.text());
            }
            rows() {
                return this.tokens().map((token, index) => {
                    switch (token.name) {
                        case 'table': return this.Table(index);
                        case 'header': return this.Header(index);
                        case 'quote': return this.Quote(index);
                    }
                    return this.Row(index);
                });
            }
            header_level(index) {
                return this.tokens()[index].chunks[0].length;
            }
            header_content(index) {
                return this.text2spans(`${index}`, this.tokens()[index].chunks[2]);
            }
            quote_text(index) {
                return this.tokens()[index].chunks[0].replace(/^> /mg, '');
            }
            block_type(index) {
                return this.tokens()[index].name;
            }
            cell_contents(indexBlock) {
                return this.tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_contents(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_contents(blockId)[0]
                    .map((cell, cellId) => this.Table_cell_head({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_contents(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_content(id) {
                return this.text2spans(`${id.block}/${id.row}/${id.cell}`, this.cell_contents(id.block)[id.row][id.cell]);
            }
            uri_base() {
                return $.$mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                const url = new URL(uri, this.uri_base());
                return url.toString();
            }
            text2spans(prefix, text) {
                return this.$.$mol_syntax_md_line.tokenize(text).map((token, index) => {
                    const id = `${prefix}/${index}`;
                    switch (token.name) {
                        case 'text-link': {
                            if (/^#|(\w+script+:)+/.test(token.chunks[1])) {
                                const span = this.Span(id);
                                span.content(this.text2spans(id, token.chunks[0]));
                                return span;
                            }
                            else {
                                const span = this.Link(id);
                                span.type(token.name);
                                span.link(this.uri_resolve(token.chunks[1]));
                                span.content(this.text2spans(id, token.chunks[0]));
                                return span;
                            }
                        }
                        case 'image-link': {
                            const span = this.Image(token.chunks[1]);
                            span.type(token.name);
                            span.link(this.uri_resolve(token.chunks[1]));
                            span.title(token.chunks[0]);
                            return span;
                        }
                        case 'code3':
                        case 'code': {
                            const span = this.Span(id);
                            span.type('code');
                            span.content(this.code2spans(id, token.chunks[0]));
                            return span;
                        }
                    }
                    const span = this.Span(id);
                    span.type(token.name);
                    span.content(token.name
                        ? [].concat.apply([], token.chunks.map((text, index) => this.text2spans(`${id}/${index}`, text)))
                        : [token.found]);
                    return span;
                });
            }
            code2spans(prefix, text) {
                return this.$.$mol_syntax_md_code.tokenize(text).map((token, index) => {
                    const id = `${prefix}/${index}`;
                    const span = this.Span(id);
                    span.type(token.name);
                    switch (token.name) {
                        case 'code-docs': {
                            span.content(this.text2spans(`${id}/${index}`, token.found));
                            return span;
                        }
                        case 'code-string': {
                            span.content([token.found[0], ...this.code2spans(`${id}/${index}`, token.found.slice(1, token.found.length - 1)), token.found[token.found.length - 1]]);
                            return span;
                        }
                        default: {
                            span.content([token.found]);
                            return span;
                        }
                    }
                });
            }
            block_content(indexBlock) {
                const token = this.tokens()[indexBlock];
                switch (token.name) {
                    case 'header': return this.text2spans(`${indexBlock}`, token.chunks[2]);
                    case 'list': return this.text2spans(`${indexBlock}`, token.chunks[0]);
                    case 'code': return this.code2spans(`${indexBlock}`, token.chunks[2]);
                    case 'code-indent': return this.code2spans(`${indexBlock}`, token.chunks[0].replace(/[\n\r]*$/, '\n').replace(/^\t/gm, ''));
                }
                return this.text2spans(`${indexBlock}`, token.chunks[0]);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_text.prototype, "tokens", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "cell_contents", null);
        $$.$mol_text = $mol_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//text.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_page extends $.$mol_view {
        sub() {
            return [].concat(this.Head(), this.Body(), this.Foot());
        }
        Head() {
            return ((obj) => {
                obj.attr = () => ({
                    "mol_theme": "$mol_theme_base",
                });
                obj.sub = () => this.head();
                return obj;
            })(new this.$.$mol_view());
        }
        head() {
            return [].concat(this.Title(), this.Tools());
        }
        Title() {
            return ((obj) => {
                obj.sub = () => [].concat(this.title());
                obj.event_click = (val) => this.event_top(val);
                return obj;
            })(new this.$.$mol_button());
        }
        event_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        Tools() {
            return ((obj) => {
                obj.sub = () => this.tools();
                return obj;
            })(new this.$.$mol_view());
        }
        tools() {
            return [].concat();
        }
        Body() {
            return ((obj) => {
                obj.scroll_top = (val) => this.body_scroll_top(val);
                obj.sub = () => this.body();
                return obj;
            })(new this.$.$mol_scroll());
        }
        body_scroll_top(val, force) {
            return (val !== void 0) ? val : 0;
        }
        body() {
            return [].concat();
        }
        Foot() {
            return ((obj) => {
                obj.attr = () => ({
                    "mol_theme": "$mol_theme_base",
                });
                obj.sub = () => this.foot();
                return obj;
            })(new this.$.$mol_view());
        }
        foot() {
            return [].concat();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "event_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "body_scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_page extends $.$mol_page {
            body_scroll_top(next) {
                return $.$mol_state_session.value(`${this}.body_scroll_top()`, next) || 0;
            }
        }
        $$.$mol_page = $mol_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_state_local extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next, force) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//local.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        var getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//const.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_file extends $.$mol_object {
        static absolute(path) {
            return $mol_file.make({
                path: $.$mol_const(path)
            });
        }
        static relative(path) {
            return $mol_file.absolute($node.path.resolve(path).replace(/\\/g, '/'));
        }
        path() {
            return '.';
        }
        watcher() {
            const watcher = $node.chokidar.watch(this.path(), {
                persistent: false,
                ignored: /(^\.|___$)/,
                depth: 0,
                ignoreInitial: true,
            });
            watcher.on('all', (type, path) => {
                const file = $mol_file.relative(path.replace(/\\/g, '/'));
                file.stat(undefined, $.$mol_atom_force_cache);
                if (type === 'change')
                    return;
                file.parent().stat(undefined, $.$mol_atom_force_cache);
            });
            watcher.on('error', (error) => {
                this.stat(error, $.$mol_atom_force_cache);
            });
            return watcher;
        }
        stat(next, force) {
            var path = this.path();
            try {
                var stat = next || $node.fs.statSync(path);
            }
            catch (error) {
                if (error.code === 'ENOENT')
                    return null;
                return error;
            }
            this.parent().watcher();
            return stat;
        }
        version() {
            return this.stat().mtime.getTime().toString(36).toUpperCase();
        }
        exists(next) {
            var exists = !!this.stat();
            if (next === void 0) {
                return exists;
            }
            else {
                if (next == exists)
                    return exists;
                if (next) {
                    this.parent().exists(true);
                    $node.fs.mkdirSync(this.path());
                }
                else {
                    $node.fs.unlinkSync(this.path());
                }
                this.stat(undefined, $.$mol_atom_force_cache);
                return next;
            }
        }
        parent() {
            return this.resolve('..');
        }
        type() {
            var stat = this.stat();
            if (stat) {
                if (stat.isFile())
                    return 'file';
                if (stat.isDirectory())
                    return 'dir';
                if (stat.isBlockDevice())
                    return 'blocks';
                if (stat.isCharacterDevice())
                    return 'chars';
                if (stat.isSymbolicLink())
                    return 'link';
                if (stat.isFIFO())
                    return 'fifo';
                if (stat.isSocket())
                    return 'socket';
            }
            else {
                return null;
            }
            throw new Error(`Unknown file type ${this.path()}`);
        }
        name() {
            return $node.path.basename(this.path());
        }
        ext() {
            var match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        content(next, force) {
            if (next === void 0) {
                return this.stat() && $node.fs.readFileSync(this.path());
            }
            this.parent().exists(true);
            $node.fs.writeFileSync(this.path(), next);
            return next;
        }
        reader() {
            return $node.fs.createReadStream(this.path());
        }
        writer() {
            return $node.fs.createWriteStream(this.path());
        }
        sub() {
            this.stat();
            switch (this.type()) {
                case 'dir':
                    return $node.fs.readdirSync(this.path())
                        .filter(name => !/^\.+$/.test(name))
                        .map(name => this.resolve(name));
            }
            return [];
        }
        resolve(path) {
            return this.constructor.relative($node.path.join(this.path(), path));
        }
        relate(base = this.constructor.relative('.')) {
            return $node.path.relative(base.path(), this.path()).replace(/\\/g, '/');
        }
        append(next) {
            $node.fs.appendFileSync(this.path(), next);
        }
        find(include, exclude) {
            var found = [];
            this.sub().forEach(child => {
                if (exclude && child.path().match(exclude))
                    return;
                if (!include || child.path().match(include))
                    found.push(child);
                if (child.type() === 'dir')
                    found = found.concat(child.find(include, exclude));
            });
            return found;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "watcher", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "stat", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "version", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "content", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "sub", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//file.node.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_locale extends $.$mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return $.$mol_state_local.value('locale', next) || $.$mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse($.$mol_file.relative(`web.locale=${lang}.json`).content());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if (error instanceof $.$mol_atom_wait)
                    $.$mol_fail_hidden(error);
                const def = this.lang_default();
                if (lang === def)
                    throw error;
                return this.source(def);
            }
        }
        static text(key) {
            for (let lang of [this.lang(), 'en']) {
                const text = this.texts(lang)[key];
                if (text)
                    return text;
                console.warn(`Not translated to "${lang}": ${key}`);
            }
            return `<${key}>`;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "text", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//locale.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_paginator extends $.$mol_view {
        sub() {
            return [].concat(this.Backward(), this.Value(), this.Forward());
        }
        Backward() {
            return ((obj) => {
                obj.hint = () => this.backward_hint();
                obj.click = (event) => this.backward(event);
                obj.sub = () => [].concat(this.Backward_icon());
                return obj;
            })(new this.$.$mol_button_minor());
        }
        backward_hint() {
            return this.$.$mol_locale.text("$mol_paginator_backward_hint");
        }
        backward(event, force) {
            return (event !== void 0) ? event : null;
        }
        Backward_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_chevron());
        }
        Value() {
            return ((obj) => {
                obj.sub = () => [].concat(this.value());
                return obj;
            })(new this.$.$mol_view());
        }
        value(val, force) {
            return (val !== void 0) ? val : 0;
        }
        Forward() {
            return ((obj) => {
                obj.hint = () => this.forward_hint();
                obj.click = (event) => this.forward(event);
                obj.sub = () => [].concat(this.Forward_icon());
                return obj;
            })(new this.$.$mol_button_minor());
        }
        forward_hint() {
            return this.$.$mol_locale.text("$mol_paginator_forward_hint");
        }
        forward(event, force) {
            return (event !== void 0) ? event : null;
        }
        Forward_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_chevron());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "Backward", null);
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "backward", null);
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "Backward_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "Value", null);
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "Forward", null);
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "forward", null);
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "Forward_icon", null);
    $.$mol_paginator = $mol_paginator;
})($ || ($ = {}));
//paginator.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paginator extends $.$mol_paginator {
            backward() {
                this.value(this.value() - 1);
            }
            forward() {
                this.value(this.value() + 1);
            }
        }
        $$.$mol_paginator = $mol_paginator;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//paginator.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_portion_indicator extends $.$mol_view {
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "width": this.width_style() }));
        }
        width_style() {
            return "0";
        }
    }
    $.$mol_portion_indicator = $mol_portion_indicator;
})($ || ($ = {}));
(function ($) {
    class $mol_portion extends $.$mol_view {
        portion() {
            return 0;
        }
        sub() {
            return [].concat(this.indicator());
        }
        indicator() {
            return ((obj) => {
                obj.width_style = () => this.indicator_width_style();
                return obj;
            })(new this.$.$mol_portion_indicator());
        }
        indicator_width_style() {
            return "0";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_portion.prototype, "indicator", null);
    $.$mol_portion = $mol_portion;
})($ || ($ = {}));
//portion.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_portion extends $.$mol_portion {
            indicator_width_style() {
                return this.portion() * 100 + '%';
            }
        }
        $$.$mol_portion = $mol_portion;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//portion.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $hyoo_slides_page extends $.$mol_view {
        role() {
            return "";
        }
        contents(val, force) {
            return (val !== void 0) ? val : "";
        }
        sub() {
            return [].concat(this.Listener(), this.Speaker());
        }
        Listener() {
            return ((obj) => {
                obj.title = () => this.title();
                obj.tools = () => [].concat(this.Slide_switcher());
                obj.body = () => [].concat(this.Listener_content(), this.Progress());
                return obj;
            })(new this.$.$mol_page());
        }
        Slide_switcher() {
            return ((obj) => {
                obj.value = (val) => this.slide(val);
                return obj;
            })(new this.$.$mol_paginator());
        }
        slide(val, force) {
            return (val !== void 0) ? val : 0;
        }
        Listener_content() {
            return ((obj) => {
                obj.uri_base = () => this.uri_base();
                obj.tokens = () => this.listener_content();
                return obj;
            })(new this.$.$mol_text());
        }
        uri_base() {
            return "";
        }
        listener_content() {
            return [].concat();
        }
        Progress() {
            return ((obj) => {
                obj.portion = () => this.progress();
                return obj;
            })(new this.$.$mol_portion());
        }
        progress() {
            return 0;
        }
        Speaker() {
            return ((obj) => {
                obj.head = () => this.speaker_tools();
                obj.body = () => [].concat(this.Speaker_content());
                return obj;
            })(new this.$.$mol_page());
        }
        speaker_tools() {
            return [].concat();
        }
        Speaker_content() {
            return ((obj) => {
                obj.uri_base = () => this.uri_base();
                obj.tokens = () => this.speaker_content();
                return obj;
            })(new this.$.$mol_text());
        }
        speaker_content() {
            return [].concat();
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_slides_page.prototype, "contents", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides_page.prototype, "Listener", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides_page.prototype, "Slide_switcher", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides_page.prototype, "slide", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides_page.prototype, "Listener_content", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides_page.prototype, "Progress", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides_page.prototype, "Speaker", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides_page.prototype, "Speaker_content", null);
    $.$hyoo_slides_page = $hyoo_slides_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_slides_page extends $.$hyoo_slides_page {
            sub() {
                const role = this.role();
                return [
                    this.Listener(),
                    ...(role === 'listener') ? [] : [this.Speaker()],
                ];
            }
        }
        $$.$hyoo_slides_page = $hyoo_slides_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_icon extends $.$mol_check {
    }
    $.$mol_check_icon = $mol_check_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_microphone extends $.$mol_icon {
        path() {
            return "M12,2C13.66,2 15,3.34 15,5V11C15,12.66 13.66,14 12,14C10.34,14 9,12.66 9,11V5C9,3.34 10.34,2 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7C7,13.76 9.24,16 12,16C14.76,16 17,13.76 17,11H19Z";
        }
    }
    $.$mol_icon_microphone = $mol_icon_microphone;
})($ || ($ = {}));
//microphone.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_external extends $.$mol_icon {
        path() {
            return "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z";
        }
    }
    $.$mol_icon_external = $mol_icon_external;
})($ || ($ = {}));
//external.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $.$mol_object {
        dom_node() {
            return null;
        }
        attr_static() {
            return ({});
        }
        event() {
            return ({});
        }
        event_async() {
            return ({});
        }
    }
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//plugin.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_plugin extends $.$mol_plugin {
            dom_node() {
                const node = this.object_host().dom_node();
                $.$mol_dom_render_attributes(node, this.attr_static());
                $.$mol_dom_render_events(node, this.event());
                $.$mol_dom_render_events_async(node, this.event_async());
                return node;
            }
            render() {
                return this.dom_node();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_plugin.prototype, "dom_node", null);
        $$.$mol_plugin = $mol_plugin;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//plugin.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_nav extends $.$mol_plugin {
        cycle(val, force) {
            return (val !== void 0) ? val : false;
        }
        mod_ctrl() {
            return false;
        }
        mod_shift() {
            return false;
        }
        mod_alt() {
            return false;
        }
        keys_x(val, force) {
            return (val !== void 0) ? val : [].concat();
        }
        keys_y(val, force) {
            return (val !== void 0) ? val : [].concat();
        }
        current_x(val, force) {
            return (val !== void 0) ? val : "";
        }
        current_y(val, force) {
            return (val !== void 0) ? val : "";
        }
        event_up(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_down(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_left(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_right(event, force) {
            return (event !== void 0) ? event : null;
        }
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "keydown": (event) => this.event_key(event) }));
        }
        event_key(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "cycle", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "keys_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "keys_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "current_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "current_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_up", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_down", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_key", null);
    $.$mol_nav = $mol_nav;
})($ || ($ = {}));
//nav.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case 38: return this.event_up(event);
                    case 40: return this.event_down(event);
                    case 37: return this.event_left(event);
                    case 39: return this.event_right(event);
                    case 33: return this.event_up(event);
                    case 34: return this.event_down(event);
                }
            }
            event_up(event) {
                const keys = this.keys_y();
                if (keys.length < 2)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                const keys = this.keys_y();
                if (keys.length < 2)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                const keys = this.keys_x();
                if (keys.length < 2)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                const keys = this.keys_x();
                if (keys.length < 2)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//nav.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_touch extends $.$mol_plugin {
        start_zoom(val, force) {
            return (val !== void 0) ? val : 0;
        }
        start_distance(val, force) {
            return (val !== void 0) ? val : 0;
        }
        zoom(val, force) {
            return (val !== void 0) ? val : 1;
        }
        start_pan(val, force) {
            return (val !== void 0) ? val : [].concat(0, 0);
        }
        pan(val, force) {
            return (val !== void 0) ? val : [].concat(0, 0);
        }
        pos(val, force) {
            return (val !== void 0) ? val : [].concat(NaN, NaN);
        }
        start_pos(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_precision() {
            return 16;
        }
        swipe_right(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_bottom(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_left(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_from_right(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_from_bottom(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_from_left(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_from_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_to_right(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_to_bottom(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_to_left(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_to_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "touchstart": (event) => this.event_start(event), "touchmove": (event) => this.event_move(event), "touchend": (event) => this.event_end(event), "mousedown": (event) => this.event_start(event), "mousemove": (event) => this.event_move(event), "mouseup": (event) => this.event_end(event), "mouseleave": (event) => this.event_leave(event), "wheel": (event) => this.event_wheel(event) }));
        }
        event_start(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_move(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_end(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_leave(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_wheel(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_distance", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_pan", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "pan", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "pos", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_pos", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_start", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_move", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_end", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_leave", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_wheel", null);
    $.$mol_touch = $mol_touch;
})($ || ($ = {}));
//touch.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_touch extends $.$mol_touch {
            rect() {
                return this.dom_node().getBoundingClientRect();
            }
            event_start(event) {
                if (event.defaultPrevented)
                    return;
                this.start_pan(this.pan());
                let pos;
                if (event instanceof MouseEvent) {
                    if (event.buttons === 1) {
                        pos = [event.pageX, event.pageY];
                        this.start_pos(pos);
                    }
                }
                else if (event instanceof TouchEvent) {
                    if (event.touches.length === 1) {
                        pos = [event.touches[0].pageX, event.touches[0].pageY];
                        this.start_pos(pos);
                    }
                    if (event.touches.length === 2) {
                        const distance = ((event.touches[1].pageX - event.touches[0].pageX) ** 2 + (event.touches[1].pageY - event.touches[0].pageY) ** 2) ** .5;
                        this.start_distance(distance);
                        this.start_zoom(this.zoom());
                    }
                }
            }
            event_leave(event) {
                if (event.defaultPrevented)
                    return;
                if (event instanceof MouseEvent)
                    this.pos(super.pos());
            }
            event_move(event) {
                if (event.defaultPrevented)
                    return;
                const start_pan = this.start_pan();
                let pos;
                let cursor_pos;
                if (event instanceof MouseEvent) {
                    cursor_pos = [event.pageX, event.pageY];
                    if (event.buttons === 1)
                        pos = cursor_pos;
                    else
                        this.start_pos(null);
                }
                else if (event instanceof TouchEvent) {
                    cursor_pos = [event.touches[0].pageX, event.touches[0].pageY];
                    if (event.touches.length === 1)
                        pos = cursor_pos;
                    else
                        this.start_pos(null);
                }
                if (cursor_pos) {
                    const { left, top } = this.rect();
                    this.pos([
                        Math.max(0, Math.round(cursor_pos[0] - left)),
                        Math.max(0, Math.round(cursor_pos[1] - top)),
                    ]);
                }
                if (pos) {
                    const start_pos = this.start_pos();
                    if (!start_pos)
                        return;
                    if (this.pan !== $mol_touch.prototype.pan) {
                        this.pan([start_pan[0] + pos[0] - start_pos[0], start_pan[1] + pos[1] - start_pos[1]]);
                        event.preventDefault();
                    }
                    if (typeof TouchEvent === 'undefined')
                        return;
                    if (!(event instanceof TouchEvent))
                        return;
                    const precision = this.swipe_precision();
                    if ((this.swipe_right !== $mol_touch.prototype.swipe_right
                        || this.swipe_from_left !== $mol_touch.prototype.swipe_from_left
                        || this.swipe_to_right !== $mol_touch.prototype.swipe_to_right)
                        && pos[0] - start_pos[0] > precision * 2
                        && Math.abs(pos[1] - start_pos[1]) < precision) {
                        this.swipe_right(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_left !== $mol_touch.prototype.swipe_left
                        || this.swipe_from_right !== $mol_touch.prototype.swipe_from_right
                        || this.swipe_to_left !== $mol_touch.prototype.swipe_to_left)
                        && start_pos[0] - pos[0] > precision * 2
                        && Math.abs(pos[1] - start_pos[1]) < precision) {
                        this.swipe_left(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_bottom !== $mol_touch.prototype.swipe_bottom
                        || this.swipe_from_top !== $mol_touch.prototype.swipe_from_top
                        || this.swipe_to_bottom !== $mol_touch.prototype.swipe_to_bottom)
                        && pos[1] - start_pos[1] > precision * 2
                        && Math.abs(pos[0] - start_pos[0]) < precision) {
                        this.swipe_bottom(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_top !== $mol_touch.prototype.swipe_top
                        || this.swipe_from_bottom !== $mol_touch.prototype.swipe_from_bottom
                        || this.swipe_to_top !== $mol_touch.prototype.swipe_to_top)
                        && start_pos[1] - pos[1] > precision * 2
                        && Math.abs(pos[0] - start_pos[0]) < precision) {
                        this.swipe_top(event);
                        event.preventDefault();
                    }
                }
                if (typeof TouchEvent === 'undefined')
                    return;
                if (!(event instanceof TouchEvent))
                    return;
                if (event.touches.length === 2) {
                    if (this.zoom === $mol_touch.prototype.zoom)
                        return;
                    const pos0 = [event.touches[0].pageX, event.touches[0].pageY];
                    const pos1 = [event.touches[1].pageX, event.touches[1].pageY];
                    const distance = ((pos1[0] - pos0[0]) ** 2 + (pos1[1] - pos0[1]) ** 2) ** .5;
                    const center = [pos1[0] / 2 + pos0[0] / 2, pos1[1] / 2 + pos0[1] / 2];
                    const start_zoom = this.start_zoom();
                    const mult = distance / this.start_distance();
                    this.zoom(start_zoom * mult);
                    const pan = [(start_pan[0] - center[0]) * mult + center[0], (start_pan[1] - center[1]) * mult + center[1]];
                    this.pan(pan);
                    event.preventDefault();
                }
            }
            swipe_left(event) {
                if (this.rect().right - this.start_pos()[0] < this.swipe_precision() * 2)
                    this.swipe_from_right(event);
                else
                    this.swipe_to_left(event);
                this.event_end(event);
            }
            swipe_right(event) {
                if (this.start_pos()[0] - this.rect().left < this.swipe_precision() * 2)
                    this.swipe_from_left(event);
                else
                    this.swipe_to_right(event);
                this.event_end(event);
            }
            swipe_top(event) {
                if (this.rect().bottom - this.start_pos()[1] < this.swipe_precision() * 2)
                    this.swipe_from_bottom(event);
                else
                    this.swipe_to_top(event);
                this.event_end(event);
            }
            swipe_bottom(event) {
                if (this.start_pos()[1] - this.rect().top < this.swipe_precision() * 2)
                    this.swipe_from_top(event);
                else
                    this.swipe_to_bottom(event);
                this.event_end(event);
            }
            event_end(event) {
                this.start_pos(null);
            }
            event_wheel(event) {
                if (this.pan !== $mol_touch.prototype.pan) {
                    event.preventDefault();
                }
                const zoom_prev = this.zoom() || 0.001;
                const zoom_next = zoom_prev * (1 - .1 * Math.sign(event.deltaY));
                const mult = zoom_next / zoom_prev;
                this.zoom(zoom_next);
                const pan_prev = this.pan();
                const center = [event.offsetX, event.offsetY];
                const pan_next = [(pan_prev[0] - center[0]) * mult + center[0], (pan_prev[1] - center[1]) * mult + center[1]];
                this.pan(pan_next);
            }
        }
        $$.$mol_touch = $mol_touch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//touch.view.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_speech extends $.$mol_plugin {
        static speaker(next, force) {
            const API = window.speechSynthesis;
            if (API.getVoices().length)
                return API;
            const on_voices = (event) => {
                if (!API.getVoices().length)
                    return;
                this.speaker(API, $.$mol_atom_force_cache);
                API.removeEventListener('voiceschanged', on_voices);
            };
            API.addEventListener('voiceschanged', on_voices);
            throw new $.$mol_atom_wait('Waiting for voice..');
        }
        static voices() {
            const lang = this.$.$mol_locale.lang();
            return this.speaker().getVoices().filter(voice => voice.lang.split('-')[0] === lang);
        }
        static say(text) {
            const speaker = this.speaker();
            speaker.cancel();
            speaker.resume();
            const rate = 1;
            const voice = this.voices()[this.voices().length - 1];
            const pitch = 1;
            var utter = new SpeechSynthesisUtterance(text);
            utter.voice = voice;
            utter.rate = rate;
            utter.pitch = pitch;
            speaker.speak(utter);
        }
        static speaking(next = true) {
            if (next)
                this.speaker().resume();
            else
                this.speaker().pause();
            return next;
        }
        static hearer() {
            const API = window['SpeechRecognition'] || window['webkitSpeechRecognition'] || window['mozSpeechRecognition'] || window['msSpeechRecognition'];
            const api = new API;
            api.interimResults = true;
            api.maxAlternatives = 1;
            api.continuous = true;
            api.lang = $.$mol_locale.lang();
            api.onnomatch = (event) => {
                this.event_result(null);
            };
            api.onresult = (event) => {
                this.event_result(event);
            };
            api.onerror = (event) => {
                console.error(new Error(event.error));
                this.event_result(null);
            };
            api.onend = (event) => {
                if (this.hearing())
                    api.start();
            };
            return api;
        }
        static hearing(next) {
            if (next === undefined)
                return false;
            if (next) {
                this.hearer().start();
            }
            else {
                this.hearer().stop();
            }
            return next;
        }
        static event_result(event) {
            this.hearer();
            return event;
        }
        static recognitions() {
            const result = this.event_result();
            if (!result)
                return [];
            const results = this.event_result().results;
            return [].slice.call(this.event_result().results);
        }
        static commands() {
            return this.recognitions().map(result => result[0].transcript.toLowerCase().trim().replace(/[,\.]/g, ''));
        }
        static text() {
            return this.recognitions().map(result => result[0].transcript).join('');
        }
        commands_skip(next = 0) {
            $mol_speech.hearing();
            return next;
        }
        render() {
            const matchers = this.matchers();
            const commands = $mol_speech.commands();
            for (let i = this.commands_skip(); i < commands.length; ++i) {
                for (let matcher of matchers) {
                    const found = commands[i].match(matcher);
                    if (!found)
                        continue;
                    new $.$mol_defer(() => {
                        this.commands_skip(i + 1);
                        this.event_catch(found.slice(1));
                    });
                    return null;
                }
            }
            return null;
        }
        event_catch(found) {
            console.log(found);
        }
        patterns() {
            return [];
        }
        matchers() {
            return this.patterns().map(pattern => {
                return new RegExp(this.prefix() + pattern + this.suffix(), 'i');
            });
        }
        prefix() {
            return '';
        }
        suffix() {
            return '[,\\s]+(?:please|would you kindly|пожалуйста|пожалуй 100|будь любезен|будь любезна|будь добра?)\.?$';
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_speech.prototype, "commands_skip", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech.prototype, "render", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech.prototype, "matchers", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "speaker", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "voices", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_speech, "say", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "speaking", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "hearer", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "hearing", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "event_result", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "recognitions", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "commands", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "text", null);
    $.$mol_speech = $mol_speech;
})($ || ($ = {}));
//speech.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $.$mol_object {
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));
//listener.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $mol_print extends $.$mol_object {
        static before() {
            return new $.$mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $.$mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $.$mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $.$mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));
//print.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_range2(item = index => index, size = () => Number.POSITIVE_INFINITY) {
        return new Proxy(new $mol_range2_array(), {
            get(target, field) {
                if (typeof field === 'string') {
                    if (field === 'length')
                        return size();
                    const index = Number(field);
                    if (index === Math.trunc(index))
                        return item(index);
                }
                return target[field];
            },
            set(target, field) {
                return $.$mol_fail(new TypeError('Lazy range is read only'));
            },
            ownKeys(target) {
                return [...Array(size())].map((v, i) => String(i)).concat('length');
            },
            getOwnPropertyDescriptor(target, field) {
                if (field === "length")
                    return {
                        value: size(),
                        writable: true,
                        enumerable: false,
                        configurable: false,
                    };
                const index = Number(field);
                if (index === Math.trunc(index))
                    return {
                        get: () => this.get(target, field, this),
                        enumerable: true,
                        configurable: true,
                    };
                return Object.getOwnPropertyDescriptor(target, field);
            }
        });
    }
    $.$mol_range2 = $mol_range2;
    class $mol_range2_array extends Array {
        concat(...tail) {
            if (tail.length === 0)
                return this;
            if (tail.length > 1) {
                let list = this;
                for (let item of tail)
                    list = list.concat(item);
                return list;
            }
            return $mol_range2(index => index < this.length ? this[index] : tail[0][index - this.length], () => this.length + tail[0].length);
        }
        filter(check, context) {
            const filtered = new $mol_range2_array();
            for (let index = 0; index < this.length; ++index) {
                const item = this[index];
                if (check.call(context, item, index, this))
                    filtered.push(item);
            }
            return filtered;
        }
        forEach(proceed, context) {
            for (let [key, value] of this.entries())
                proceed.call(context, value, key, this);
        }
        map(proceed, context) {
            return $mol_range2(index => proceed.call(context, this[index], index, this), () => this.length);
        }
        reduce(merge, result) {
            let index = 0;
            if (arguments.length === 1) {
                result = this[index++];
            }
            for (; index < this.length; ++index) {
                result = merge(result, this[index], index, this);
            }
            return result;
        }
        slice(from = 0, to = this.length) {
            return $mol_range2(index => this[from + index], () => Math.min(to, this.length) - from);
        }
        some(check, context) {
            for (let index = 0; index < this.length; ++index) {
                if (check.call(context, this[index], index, this))
                    return true;
            }
            return false;
        }
        every(check, context) {
            for (let index = 0; index < this.length; ++index) {
                if (!check.call(context, this[index], index, this))
                    return false;
            }
            return true;
        }
    }
    $.$mol_range2_array = $mol_range2_array;
})($ || ($ = {}));
//range2.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    class $hyoo_slides extends $.$mol_view {
        uri_slides_default() {
            return "https://nin-jin.github.io/slides/slides/";
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "hyoo_slides_role": this.role(), "mol_theme": this.theme() }));
        }
        role() {
            return "";
        }
        theme() {
            return "$mol_theme_light";
        }
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "touch-action": "none" }));
        }
        contents(val, force) {
            return (val !== void 0) ? val : "";
        }
        Loader() {
            return ((obj) => {
                obj.dom_name = () => "iframe";
                obj.attr = () => ({
                    "src": this.uri_slides(),
                });
                obj.event = () => ({
                    "load": (val) => this.event_load(val),
                });
                return obj;
            })(new this.$.$mol_view());
        }
        uri_slides() {
            return this.uri_slides_default();
        }
        event_load(val, force) {
            return (val !== void 0) ? val : null;
        }
        Page(index) {
            return ((obj) => {
                obj.title = () => this.page_title(index);
                obj.slide = (val) => this.page_slide(index, val);
                obj.uri_base = () => this.uri_base();
                obj.role = () => this.role();
                obj.listener_content = () => this.listener_content(index);
                obj.speaker_content = () => this.speaker_content(index);
                obj.progress = () => this.progress(index);
                obj.speaker_tools = () => this.speaker_tools();
                return obj;
            })(new this.$.$hyoo_slides_page());
        }
        page_title(index) {
            return "";
        }
        page_slide(index, val, force) {
            return (val !== void 0) ? val : 0;
        }
        uri_base() {
            return "";
        }
        listener_content(index) {
            return [].concat();
        }
        speaker_content(index) {
            return [].concat();
        }
        progress(index) {
            return 0;
        }
        speaker_tools() {
            return [].concat(this.Speech_toggle(), this.Speech_text(), this.Open_listener());
        }
        Speech_toggle() {
            return ((obj) => {
                obj.Icon = () => this.Speech_toggle_icon();
                obj.checked = (val) => this.speech_enabled(val);
                obj.hint = () => this.speech_toggle_hint();
                return obj;
            })(new this.$.$mol_check_icon());
        }
        Speech_toggle_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_microphone());
        }
        speech_enabled(val, force) {
            return (val !== void 0) ? val : false;
        }
        speech_toggle_hint() {
            return this.$.$mol_locale.text("$hyoo_slides_speech_toggle_hint");
        }
        Speech_text() {
            return ((obj) => {
                obj.sub = () => [].concat(this.speech_text());
                return obj;
            })(new this.$.$mol_view());
        }
        speech_text() {
            return "";
        }
        Open_listener() {
            return ((obj) => {
                obj.target = () => "_blank";
                obj.hint = () => this.open_listener_hint();
                obj.arg = () => ({
                    "role": "listener",
                    "slide": null,
                });
                obj.sub = () => [].concat(this.Open_listener_icon());
                return obj;
            })(new this.$.$mol_link());
        }
        open_listener_hint() {
            return this.$.$mol_locale.text("$hyoo_slides_open_listener_hint");
        }
        Open_listener_icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_external());
        }
        plugins() {
            return [].concat(this.Nav(), this.Touch(), this.Speech_next(), this.Speech_next_auto(), this.Speech_slide(), this.Speech_prev(), this.Speech_start(), this.Speech_end(), this.Speech_about(), this.Speech_repeat(), this.Speech_on(), this.Speech_off(), this.Lights_toggle(), this.Sing());
        }
        Nav() {
            return ((obj) => {
                obj.keys_y = () => this.slide_keys();
                obj.keys_x = () => this.slide_keys();
                obj.current_y = (val) => this.slide(val);
                obj.current_x = (val) => this.slide(val);
                return obj;
            })(new this.$.$mol_nav());
        }
        slide_keys() {
            return [].concat();
        }
        slide(val, force) {
            return (val !== void 0) ? val : 0;
        }
        Touch() {
            return ((obj) => {
                obj.swipe_to_left = (event) => this.event_next(event);
                obj.swipe_to_right = (event) => this.event_prev(event);
                return obj;
            })(new this.$.$mol_touch());
        }
        event_next(val, force) {
            return (val !== void 0) ? val : null;
        }
        event_prev(val, force) {
            return (val !== void 0) ? val : null;
        }
        Speech_next() {
            return ((obj) => {
                obj.event_catch = (val) => this.event_next(val);
                obj.patterns = () => this.speech_next();
                return obj;
            })(new this.$.$mol_speech());
        }
        speech_next() {
            return [].concat("next", "forward", "дальше", "далее", "даша", "дарья", "дай", "доля", "удали", "впер[её]д", "период", "перевод", "следующий слайд");
        }
        Speech_next_auto() {
            return ((obj) => {
                obj.event_catch = (val) => this.event_next(val);
                obj.suffix = () => "";
                obj.patterns = () => this.speech_next_auto();
                return obj;
            })(new this.$.$mol_speech());
        }
        speech_next_auto() {
            return [].concat();
        }
        Speech_slide() {
            return ((obj) => {
                obj.event_catch = (val) => this.event_slide(val);
                obj.patterns = () => this.speech_slide();
                return obj;
            })(new this.$.$mol_speech());
        }
        event_slide(val, force) {
            return (val !== void 0) ? val : null;
        }
        speech_slide() {
            return [].concat("number (\\d+)", "(\\d+) slide", "номер (\\d+)", "(\\d+) слайд");
        }
        Speech_prev() {
            return ((obj) => {
                obj.event_catch = (val) => this.event_prev(val);
                obj.patterns = () => this.speech_prev();
                return obj;
            })(new this.$.$mol_speech());
        }
        speech_prev() {
            return [].concat("back", "назад", "назар", "надо", "предыдущий слайд");
        }
        Speech_start() {
            return ((obj) => {
                obj.event_catch = (val) => this.event_start(val);
                obj.patterns = () => this.speech_start();
                return obj;
            })(new this.$.$mol_speech());
        }
        event_start(val, force) {
            return (val !== void 0) ? val : null;
        }
        speech_start() {
            return [].concat("to beginning", "first slide", "начало", "начала", "первый слайд", "первый слой");
        }
        Speech_end() {
            return ((obj) => {
                obj.event_catch = (val) => this.event_end(val);
                obj.patterns = () => this.speech_end();
                return obj;
            })(new this.$.$mol_speech());
        }
        event_end(val, force) {
            return (val !== void 0) ? val : null;
        }
        speech_end() {
            return [].concat("to ending", "last slide", "конец", "последний слайд");
        }
        Speech_about() {
            return ((obj) => {
                obj.event_catch = (val) => this.event_about(val);
                obj.patterns = () => this.speech_about();
                return obj;
            })(new this.$.$mol_speech());
        }
        event_about(val, force) {
            return (val !== void 0) ? val : null;
        }
        speech_about() {
            return [].concat("about( \\S+?)+", "search( \\S+?)+", "про( \\S+?)+", "найти( \\S+?)+", "найди( \\S+?)+");
        }
        Speech_repeat() {
            return ((obj) => {
                obj.event_catch = (val) => this.event_repeat(val);
                obj.patterns = () => this.speech_repeat();
                return obj;
            })(new this.$.$mol_speech());
        }
        event_repeat(val, force) {
            return (val !== void 0) ? val : null;
        }
        speech_repeat() {
            return [].concat("repeat", "повтори", "повторите");
        }
        Speech_on() {
            return ((obj) => {
                obj.event_catch = (val) => this.event_speech_on(val);
                obj.patterns = () => this.speech_on();
                return obj;
            })(new this.$.$mol_speech());
        }
        event_speech_on(val, force) {
            return (val !== void 0) ? val : null;
        }
        speech_on() {
            return [].concat("continue", "продолжай");
        }
        Speech_off() {
            return ((obj) => {
                obj.event_catch = (val) => this.event_speech_off(val);
                obj.patterns = () => this.speech_off();
                return obj;
            })(new this.$.$mol_speech());
        }
        event_speech_off(val, force) {
            return (val !== void 0) ? val : null;
        }
        speech_off() {
            return [].concat("shut up", "hush", "замолчи", "помолчи");
        }
        Lights_toggle() {
            return ((obj) => {
                obj.event_catch = (val) => this.event_lights_toggle(val);
                obj.patterns = () => this.lights_toggle();
                return obj;
            })(new this.$.$mol_speech());
        }
        event_lights_toggle(val, force) {
            return (val !== void 0) ? val : null;
        }
        lights_toggle() {
            return [].concat("lights off", "lights on", "toggle lights", "свет", "след", "цвет");
        }
        Sing() {
            return ((obj) => {
                obj.event_catch = (val) => this.event_sing(val);
                obj.patterns = () => this.sing();
                return obj;
            })(new this.$.$mol_speech());
        }
        event_sing(val, force) {
            return (val !== void 0) ? val : null;
        }
        sing() {
            return [].concat("sing( \\S+?)*", "спой( \\S+?)*");
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "contents", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "Loader", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "event_load", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_slides.prototype, "Page", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_slides.prototype, "page_slide", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "Speech_toggle", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "Speech_toggle_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "speech_enabled", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "Speech_text", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "Open_listener", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "Open_listener_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "Nav", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "slide", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "Touch", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "event_next", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "event_prev", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "Speech_next", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "Speech_next_auto", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "Speech_slide", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "event_slide", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "Speech_prev", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "Speech_start", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "event_start", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "Speech_end", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "event_end", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "Speech_about", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "event_about", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "Speech_repeat", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "event_repeat", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "Speech_on", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "event_speech_on", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "Speech_off", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "event_speech_off", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "Lights_toggle", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "event_lights_toggle", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "Sing", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_slides.prototype, "event_sing", null);
    $.$hyoo_slides = $hyoo_slides;
})($ || ($ = {}));
//slides.view.tree.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_slides extends $.$hyoo_slides {
            sub() {
                if (!this.contents())
                    return [this.Loader()];
                if (this.$.$mol_print.active()) {
                    return $.$mol_range2(index => this.Page(index), () => this.slide_keys().length);
                }
                else {
                    return [this.Page(this.slide())];
                }
            }
            uri_base() {
                return this.uri_slides().replace(/[^/]*$/, '');
            }
            event_load() {
                const frame = this.Loader().dom_node();
                frame.contentWindow.postMessage(['content'], '*');
                window.onmessage = (event) => {
                    if (event.data[0] !== 'done')
                        return;
                    window.onmessage = null;
                    this.contents(event.data[1]);
                };
            }
            content_pages() {
                return this.contents().split(/^(?=#)/mg);
            }
            page_tokens(index) {
                return $.$mol_syntax_md_flow.tokenize(this.content_pages()[index] || '');
            }
            page_title(index) {
                for (let token of this.page_tokens(index)) {
                    if (token.name === 'header')
                        return token.chunks[2];
                }
                return '';
            }
            title() {
                return this.page_title(this.slide()) || super.title();
            }
            speaker_content(index) {
                return this.page_tokens(index).filter(token => {
                    if (token.name === 'header')
                        return false;
                    if (token.name !== 'block')
                        return false;
                    if ('!['.indexOf(token.found[0]) >= 0)
                        return false;
                    return true;
                });
            }
            listener_content(index) {
                return this.page_tokens(index).filter(token => {
                    if (token.name === 'header')
                        return false;
                    if (token.name !== 'block')
                        return true;
                    if ('!['.indexOf(token.found[0]) >= 0)
                        return true;
                    return false;
                });
            }
            slide_local(uri, next) {
                return $.$mol_state_local.value(this.state_key(`slide_local(${JSON.stringify(uri)})`), next) || 0;
            }
            slide(next) {
                const count = this.content_pages().length;
                if (next >= count)
                    next = count - 1;
                if (next < 0)
                    next = 0;
                let str = (next === undefined) ? undefined : String(next);
                str = $.$mol_state_arg.value(this.state_key('slide'), str) || undefined;
                return this.slide_local(this.uri_slides(), str && Number(str)) || 0;
            }
            page_slide(index, next) {
                if (next !== undefined)
                    this.slide(next);
                return index;
            }
            slide_keys() {
                return this.content_pages().map((_, index) => index);
            }
            role(next) {
                return $.$mol_state_arg.value(this.state_key('role'), next);
            }
            uri_slides() {
                return $.$mol_state_arg.value(this.state_key('slides')) || this.uri_slides_default();
            }
            event_next(next) {
                this.slide(this.slide() + 1);
            }
            event_prev(next) {
                this.slide(this.slide() - 1);
            }
            event_start(next) {
                this.slide(0);
            }
            event_end(next) {
                this.slide(this.content_pages().length - 1);
            }
            event_slide([numb]) {
                this.slide(Number(numb));
            }
            event_about([topic]) {
                let matcher = topic;
                const pages = this.content_pages();
                while (matcher.length > 2) {
                    for (let i = 0; i < pages.length; ++i) {
                        if (!this.page_title(i).toLowerCase().match(matcher))
                            continue;
                        this.slide(i);
                        return;
                    }
                    matcher = matcher.substring(0, matcher.length - 1);
                }
                matcher = topic;
                while (matcher.length > 2) {
                    for (let i = 0; i < pages.length; ++i) {
                        if (!pages[i].toLowerCase().match(matcher))
                            continue;
                        this.slide(i);
                        return;
                    }
                    matcher = matcher.substring(0, matcher.length - 1);
                }
            }
            event_repeat(next) {
                const commands = $.$mol_speech.commands();
                const command = commands[commands.length - 2];
                if (command)
                    $.$mol_speech.say(command);
            }
            event_speech_on(next) {
                $.$mol_speech.speaking(true);
            }
            event_speech_off(next) {
                $.$mol_speech.speaking(false);
            }
            event_sing() {
                this.$.$mol_speech.say('Не хочу! Не буду!');
            }
            speech_enabled(next) {
                return $.$mol_speech.hearing(next);
            }
            speech_text() {
                const commands = $.$mol_speech.commands();
                return commands[commands.length - 1] || '';
            }
            theme() {
                return this.lights() ? '$mol_theme_light' : '$mol_theme_dark';
            }
            lights(next) {
                const lights = $.$mol_state_local.value(this.state_key(`lights`), next);
                if (lights == null)
                    return true;
                return lights;
            }
            event_lights_toggle() {
                this.lights(!this.lights());
            }
            timings() {
                return this.content_pages().map(page => page.length);
            }
            timing_total() {
                return this.timings().slice(1).reduce((a, b) => a + b, 0);
            }
            progress(index) {
                const timing = this.timings().slice(1, index + 1).reduce((a, b) => a + b, 0);
                return timing / this.timing_total();
            }
            speech_next_auto() {
                const texts = this.speaker_content(this.slide());
                if (texts.length === 0)
                    return [];
                const found = /[\s\S]*\s([^.!?\t\n\r ]+)[\s\S]*?/.exec(texts[texts.length - 1].found);
                if (!found)
                    return [];
                const suffix = found[1].replace(/(.)$/, '$1?');
                return [suffix];
            }
        }
        __decorate([
            $.$mol_mem
        ], $hyoo_slides.prototype, "content_pages", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_slides.prototype, "page_tokens", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_slides.prototype, "page_title", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_slides.prototype, "title", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_slides.prototype, "speaker_content", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_slides.prototype, "listener_content", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_slides.prototype, "slide", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_slides.prototype, "slide_keys", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_slides.prototype, "lights", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_slides.prototype, "timings", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_slides.prototype, "timing_total", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_slides.prototype, "progress", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_slides.prototype, "speech_next_auto", null);
        $$.$hyoo_slides = $hyoo_slides;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//slides.view.js.map
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    function $mol_test(set) {
        for (let name in set) {
            const code = set[name];
            const test = (typeof code === 'string') ? new Function('', code) : code;
            $_1.$mol_test_all.push($_1.$mol_log_group(name, test));
        }
        $mol_test_schedule();
    }
    $_1.$mol_test = $mol_test;
    $_1.$mol_test_mocks = [];
    $_1.$mol_test_all = [];
    async function $mol_test_run() {
        for (var test of $_1.$mol_test_all) {
            let context = Object.create($$);
            for (let mock of $_1.$mol_test_mocks)
                await mock(context);
            await test(context);
        }
        console.info('$mol_test', $_1.$mol_test_all.length);
    }
    $_1.$mol_test_run = $mol_test_run;
    let scheduled = false;
    function $mol_test_schedule() {
        if (scheduled)
            return;
        scheduled = true;
        setTimeout($_1.$mol_log_group('$mol_test', () => {
            scheduled = false;
            $mol_test_run();
        }));
    }
    $_1.$mol_test_schedule = $mol_test_schedule;
    $_1.$mol_test_mocks.push(context => {
        let seed = 0;
        context.Math = Object.create(Math);
        context.Math.random = () => Math.sin(seed++);
        const forbidden = ['XMLHttpRequest', 'fetch'];
        for (let api of forbidden) {
            context[api] = new Proxy(function () { }, {
                get() {
                    $_1.$mol_fail_hidden(new Error(`${api} is forbidden in tests`));
                },
                apply() {
                    $_1.$mol_fail_hidden(new Error(`${api} is forbidden in tests`));
                },
            });
        }
    });
    $mol_test({
        'mocked Math.random'($) {
            console.assert($.Math.random() === 0);
            console.assert($.Math.random() === Math.sin(1));
        },
        'forbidden XMLHttpRequest'($) {
            try {
                console.assert(void new $.XMLHttpRequest);
            }
            catch (error) {
                console.assert(error.message === 'XMLHttpRequest is forbidden in tests');
            }
        },
        'forbidden fetch'($) {
            try {
                console.assert(void $.fetch(''));
            }
            catch (error) {
                console.assert(error.message === 'fetch is forbidden in tests');
            }
        },
    });
})($ || ($ = {}));
//test.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'objects by reference'() {
            $.$mol_assert_equal($.$mol_compare_any({}, {}), false);
        },
        'primitives by value'() {
            $.$mol_assert_equal($.$mol_compare_any('a', 'a'), true);
        },
        'NaN by value'() {
            $.$mol_assert_equal($.$mol_compare_any(Number.NaN, Number.NaN), true);
        },
        'NaN not equal zero'() {
            $.$mol_assert_equal($.$mol_compare_any(Number.NaN, 0), false);
        },
    });
})($ || ($ = {}));
//any.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'return source when same object'() {
            const target = {};
            $.$mol_assert_equal($.$mol_conform(target, target), target);
        },
        'return target when some is not object'() {
            const obj = { a: 1 };
            $.$mol_assert_equal($.$mol_conform(true, obj), true);
            $.$mol_assert_equal($.$mol_conform(obj, true), obj);
        },
        'return target when some is null'() {
            const obj = { a: 1 };
            $.$mol_assert_equal($.$mol_conform(null, obj), null);
            $.$mol_assert_equal($.$mol_conform(obj, null), obj);
        },
        'return target when some is undefined'() {
            const obj = { a: 1 };
            $.$mol_assert_equal($.$mol_conform(undefined, obj), undefined);
            $.$mol_assert_equal($.$mol_conform(obj, undefined), obj);
        },
        'return target when different keys count'() {
            const target = [1, 2, 3];
            const source = [1, 2, 3, undefined];
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.join(','), '1,2,3');
        },
        'return source when array values are strong equal'() {
            const source = [1, 2, 3];
            $.$mol_assert_equal($.$mol_conform([1, 2, 3], source), source);
        },
        'return source when object values are strong equal'() {
            const source = { a: 1, b: 2 };
            $.$mol_assert_equal($.$mol_conform({ a: 1, b: 2 }, source), source);
        },
        'return target when some values are not equal'() {
            const target = [1, 2, 3];
            const source = [1, 2, 5];
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.join(','), '1,2,3');
        },
        'return source when values are deep equal'() {
            const source = { foo: { bar: 1 } };
            $.$mol_assert_equal($.$mol_conform({ foo: { bar: 1 } }, source), source);
        },
        'return target with equal values from source and not equal from target'() {
            const source = { foo: { xxx: 1 }, bar: { xxx: 2 } };
            const target = { foo: { xxx: 1 }, bar: { xxx: 3 } };
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.foo, source.foo);
            $.$mol_assert_equal(result.bar, target.bar);
        },
        'return target when equal but with different class'() {
            const target = { '0': 1 };
            $.$mol_assert_equal($.$mol_conform(target, [1]), target);
        },
        'return target when conformer for class is not defined'() {
            const Obj = class {
            };
            const source = new Obj;
            const target = new Obj;
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
        },
        'return target when has cyclic reference'() {
            const source = { foo: {} };
            source['self'] = source;
            const target = { foo: {} };
            target['self'] = target;
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result['self'], target);
            $.$mol_assert_equal(result.foo, source.foo);
        },
        'return source when equal dates'() {
            const source = new Date(12345);
            const target = new Date(12345);
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
        'return source when equal regular expressions'() {
            const source = /\x22/mig;
            const target = /\x22/mig;
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
        'return cached value if already conformed'() {
            const source = { foo: { xxx: 1 }, bar: { xxx: 3 } };
            const target = { foo: { xxx: 2 }, bar: { xxx: 3 } };
            const result = $.$mol_conform(target, source);
            target.foo.xxx = 1;
            $.$mol_assert_equal($.$mol_conform(target.foo, source.foo), target.foo);
        },
        'skip readlony fields'() {
            const source = { foo: {}, bar: {} };
            const target = { foo: {}, bar: {} };
            Object.defineProperty(target, 'bar', { value: {}, writable: false });
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, target);
            $.$mol_assert_equal(result.foo, source.foo);
            $.$mol_assert_equal(result.bar, target.bar);
        },
        'object with NaN'() {
            const source = { foo: Number.NaN };
            const target = { foo: Number.NaN };
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
        'array with NaN'() {
            const source = [Number.NaN];
            const target = [Number.NaN];
            const result = $.$mol_conform(target, source);
            $.$mol_assert_equal(result, source);
        },
    });
})($ || ($ = {}));
//conform.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'must be false'() {
            $.$mol_assert_not(0);
        },
        'must be true'() {
            $.$mol_assert_ok(1);
        },
        'two must be equal'() {
            $.$mol_assert_equal(2, 2);
        },
        'three must be equal'() {
            $.$mol_assert_equal(2, 2, 2);
        },
        'two must be unique'() {
            $.$mol_assert_unique([3], [3]);
        },
        'three must be unique'() {
            $.$mol_assert_unique([3], [3], [3]);
        },
        'two must be alike'() {
            $.$mol_assert_like([3], [3]);
        },
        'three must be alike'() {
            $.$mol_assert_like([3], [3], [3]);
        },
    });
})($ || ($ = {}));
//assert.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_assert_ok(value) {
        if (value)
            return;
        $.$mol_fail(new Error(`${value} ≠ true`));
    }
    $.$mol_assert_ok = $mol_assert_ok;
    function $mol_assert_not(value) {
        if (!value)
            return;
        $.$mol_fail(new Error(`${value} ≠ false`));
    }
    $.$mol_assert_not = $mol_assert_not;
    function $mol_assert_fail(handler, ErrorRight) {
        const fail = $.$mol_fail;
        try {
            $.$mol_fail = $.$mol_fail_hidden;
            handler();
        }
        catch (error) {
            if (!ErrorRight)
                return error;
            if (typeof ErrorRight === 'string') {
                if (error.message !== ErrorRight)
                    throw error;
            }
            else {
                if (!(error instanceof ErrorRight))
                    throw error;
            }
            return error;
        }
        finally {
            $.$mol_fail = fail;
        }
        $.$mol_fail(new Error('Not failed'));
    }
    $.$mol_assert_fail = $mol_assert_fail;
    function $mol_assert_equal(...args) {
        for (let i = 0; i < args.length; ++i) {
            for (let j = 0; j < args.length; ++j) {
                if (i === j)
                    continue;
                if (Number.isNaN(args[i]) && Number.isNaN(args[j]))
                    continue;
                if (args[i] !== args[j])
                    $.$mol_fail(new Error(`Not equal\n${args[i]}\n${args[j]}`));
            }
        }
    }
    $.$mol_assert_equal = $mol_assert_equal;
    function $mol_assert_unique(...args) {
        for (let i = 0; i < args.length; ++i) {
            for (let j = 0; j < args.length; ++j) {
                if (i === j)
                    continue;
                if (args[i] === args[j] || (Number.isNaN(args[i]) && Number.isNaN(args[j]))) {
                    $.$mol_fail(new Error(`args[${i}] = args[${j}] = ${args[i]}`));
                }
            }
        }
    }
    $.$mol_assert_unique = $mol_assert_unique;
    function $mol_assert_like(head, ...tail) {
        for (let value of tail) {
            value = $.$mol_conform(value, head);
            if (Number.isNaN(value) && Number.isNaN(head))
                continue;
            if (head !== value)
                $.$mol_fail(new Error(`Not like\n${head}\n${value}`));
            head = value;
        }
    }
    $.$mol_assert_like = $mol_assert_like;
})($ || ($ = {}));
//assert.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'init with overload'() {
            class X extends $.$mol_object {
                foo() {
                    return 1;
                }
            }
            var x = X.make({
                foo: () => 2,
            });
            $.$mol_assert_equal(x.foo(), 2);
        },
    });
})($ || ($ = {}));
//object.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'caching'() {
            let random = new $.$mol_atom('random', () => Math.random());
            $.$mol_assert_equal(random.get(), random.get());
        },
        'lazyness'() {
            let value = 0;
            let prop = new $.$mol_atom('prop', () => value = 1);
            $.$mol_defer.run();
            $.$mol_assert_equal(value, 0);
        },
        'instant actualization'() {
            let source = new $.$mol_atom('source', (next) => next || 1);
            let middle = new $.$mol_atom('middle', () => source.get() + 1);
            let target = new $.$mol_atom('target', () => middle.get() + 1);
            $.$mol_assert_equal(target.get(), 3);
            source.set(2);
            $.$mol_assert_equal(target.get(), 4);
        },
        'do not actualize when masters not changed'() {
            let target_updates = 0;
            let source = new $.$mol_atom('source', (next) => next || 1);
            let middle = new $.$mol_atom('middle', () => Math.abs(source.get()));
            let target = new $.$mol_atom('target', () => {
                ++target_updates;
                return middle.get();
            });
            target.get();
            $.$mol_assert_equal(target_updates, 1);
            source.set(-1);
            target.get();
            $.$mol_assert_equal(target_updates, 1);
        },
        'obsolete atoms actualized in initial order'() {
            let actualizations = '';
            let source = new $.$mol_atom('source', (next) => next || 1);
            let middle = new $.$mol_atom('middle', () => {
                actualizations += 'M';
                return source.get();
            });
            let target = new $.$mol_atom('target', () => {
                actualizations += 'T';
                source.get();
                return middle.get();
            });
            target.get();
            $.$mol_assert_equal(actualizations, 'TM');
            source.set(2);
            $.$mol_defer.run();
            $.$mol_assert_equal(actualizations, 'TMTM');
        },
        'automatic deferred restart'() {
            let targetValue = 0;
            let source = new $.$mol_atom('source', (next) => next || 1);
            let middle = new $.$mol_atom('middle', () => source.get() + 1);
            let target = new $.$mol_atom('target', () => targetValue = middle.get() + 1);
            target.get();
            $.$mol_assert_equal(targetValue, 3);
            source.set(2);
            $.$mol_assert_equal(targetValue, 3);
            $.$mol_defer.run();
            $.$mol_assert_equal(targetValue, 4);
        },
        'Right reactive change of source'() {
            let targetValue;
            let test_counter = new $.$mol_atom('test_counter', next => {
                new $.$mol_defer(() => {
                    test_counter.push(next || 1);
                });
                $.$mol_fail_hidden(new $.$mol_atom_wait);
            });
            let slave = new $.$mol_atom('slave', next => test_counter.get());
            slave.actualize();
            let res = [];
            const error = new Error('test error');
            const test_task = new $.$mol_atom('test_task')
                .then(() => test_counter.get() + 1)
                .then(next => test_counter.set(next))
                .then(next => {
                test_counter.set(next + 1);
                $.$mol_fail_hidden(error);
            })
                .catch(error => [error])
                .then(next => res = next);
            $.$mol_defer.run();
            $.$mol_assert_equal(test_counter.get(), 3);
            $.$mol_assert_equal(res[0], error);
        },
        'error handling'() {
            let source = new $.$mol_atom('source', (next) => {
                const error = new Error('Test error');
                error['$mol_atom_catched'] = true;
                $.$mol_fail_hidden(error);
            });
            let middle = new $.$mol_atom('middle', () => source.get() + 1);
            let target = new $.$mol_atom('target', () => middle.get() + 1);
            $.$mol_assert_fail(() => target.get().valueOf());
        },
        'setting equal state are ignored'() {
            let atom = new $.$mol_atom('atom', next => next || { foo: [777] });
            let v1 = atom.get();
            let v2 = { foo: [777] };
            let v3 = atom.set(v2);
            $.$mol_assert_equal(v1, v3);
            $.$mol_assert_unique(v2, v3);
        },
        'setting equal to last setted are ignored until changed'() {
            let val = { foo: [777] };
            let called = 0;
            let atom = new $.$mol_atom('atom', () => {
                ++called;
                return val;
            });
            atom.get();
            $.$mol_assert_equal(called, 1);
            atom.set({ foo: [666] });
            $.$mol_assert_equal(called, 2);
            atom.set({ foo: [666] });
            $.$mol_assert_equal(called, 2);
            atom.value({ foo: [666] }, $.$mol_atom_force_update);
            $.$mol_assert_equal(called, 3);
            atom.push({ foo: [777] });
            atom.set({ foo: [666] });
            $.$mol_assert_equal(called, 4);
            atom.set({ foo: [555] });
            $.$mol_assert_equal(called, 5);
        },
        'Next remains after restart'() {
            let defer = new $.$mol_atom('defer', next => {
                new $.$mol_defer(() => {
                    defer.push({});
                });
                $.$mol_fail_hidden(new $.$mol_atom_wait);
            });
            let value = {};
            let task = new $.$mol_atom('task', next => {
                defer.get().valueOf();
                return next;
            });
            $.$mol_assert_fail(() => task.set(value).valueOf(), $.$mol_atom_wait);
            $.$mol_defer.run();
            $.$mol_assert_equal(task.get(), value);
        },
    });
})($ || ($ = {}));
//atom.test.js.map
;
"use strict";
//assert.test.js.map
;
"use strict";
//assert.js.map
;
"use strict";
//partial.test.js.map
;
"use strict";
//partial.js.map
;
"use strict";
//jsx d.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElement: (name) => $.$mol_dom_context.document.createElement(name)
    };
})($ || ($ = {}));
//jsx.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Make empty div'() {
            $.$mol_assert_equal(($.$mol_jsx_make("div", null)).outerHTML, '<div></div>');
        },
        'Define native field'() {
            const dom = $.$mol_jsx_make("input", { value: '123' });
            $.$mol_assert_equal(dom.outerHTML, '<input value="123">');
            $.$mol_assert_equal(dom.value, '123');
        },
        'Define classes'() {
            const dom = $.$mol_jsx_make("div", { classList: ['foo bar'] });
            $.$mol_assert_equal(dom.outerHTML, '<div class="foo bar"></div>');
        },
        'Define styles'() {
            const dom = $.$mol_jsx_make("div", { style: { color: 'red' } });
            $.$mol_assert_equal(dom.outerHTML, '<div style="color: red;"></div>');
        },
        'Define dataset'() {
            const dom = $.$mol_jsx_make("div", { dataset: { foo: 'bar' } });
            $.$mol_assert_equal(dom.outerHTML, '<div data-foo="bar"></div>');
        },
        'Define attributes'() {
            const dom = $.$mol_jsx_make("div", { hidden: true, lang: "ru" });
            $.$mol_assert_equal(dom.outerHTML, '<div hidden="" lang="ru"></div>');
        },
        'Define child nodes'() {
            const dom = $.$mol_jsx_make("div", null,
                "hello",
                $.$mol_jsx_make("strong", null, "world"),
                "!");
            $.$mol_assert_equal(dom.outerHTML, '<div>hello<strong>world</strong>!</div>');
        },
        'Function as component'() {
            const Button = ({ hint }, target) => {
                return $.$mol_jsx_make("button", { title: hint }, target());
            };
            const dom = $.$mol_jsx_make(Button, { id: "/foo", hint: "click me" }, () => 'hey!');
            $.$mol_assert_equal(dom.outerHTML, '<button title="click me" id="/foo">hey!</button>');
        },
        'Nested guid generation'() {
            const Foo = () => {
                return $.$mol_jsx_make("div", null,
                    $.$mol_jsx_make(Bar, { id: "/bar" },
                        $.$mol_jsx_make("img", { id: "/icon" })));
            };
            const Bar = (props, icon) => {
                return $.$mol_jsx_make("span", null, icon);
            };
            const dom = $.$mol_jsx_make(Foo, { id: "/foo" });
            $.$mol_assert_equal(dom.outerHTML, '<div id="/foo"><span id="/foo/bar"><img id="/foo/icon"></span></div>');
        },
        'Fail on non unique ids'() {
            const App = () => {
                return $.$mol_jsx_make("div", null,
                    $.$mol_jsx_make("span", { id: "/bar" }),
                    $.$mol_jsx_make("span", { id: "/bar" }));
            };
            $.$mol_assert_fail(() => $.$mol_jsx_make(App, { id: "/foo" }), 'JSX already has tag with id "/bar"');
        },
    });
})($ || ($ = {}));
//make.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_jsx_make(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        if ($.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $.$mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(id)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        const guid = $.$mol_jsx_prefix + id;
        let node = guid && $.$mol_jsx_document.getElementById(guid);
        if (typeof Elem !== 'string') {
            if (Elem.prototype) {
                const view = node && node[Elem] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                node = view.valueOf();
                node[Elem] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                }
            }
        }
        if (!node)
            node = $.$mol_jsx_document.createElement(Elem);
        $.$mol_dom_render_children(node, [].concat(...childNodes));
        for (const key in props) {
            if (typeof props[key] === 'string') {
                node.setAttribute(key, props[key]);
            }
            else if (props[key] && props[key]['constructor'] === Object) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            node[key] = props[key];
        }
        if (guid)
            node.id = guid;
        return node;
    }
    $.$mol_jsx_make = $mol_jsx_make;
})($ || ($ = {}));
//make.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'number'() {
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get(123), undefined);
            $.$mol_assert_equal(dict.has(123), false);
            dict.set(123, 321);
            $.$mol_assert_equal(dict.get(123), 321);
            $.$mol_assert_equal(dict.has(123), true);
            dict.delete(123);
            $.$mol_assert_equal(dict.get(123), undefined);
            $.$mol_assert_equal(dict.has(123), false);
        },
        'pojo as key'() {
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get({ foo: 123 }), undefined);
            $.$mol_assert_equal(dict.has({ foo: 123 }), false);
            dict.set({ foo: 123 }, 321);
            $.$mol_assert_equal(dict.get({ foo: 123 }), 321);
            $.$mol_assert_equal(dict.has({ foo: 123 }), true);
            dict.delete({ foo: 123 });
            $.$mol_assert_equal(dict.get({ foo: 123 }), undefined);
            $.$mol_assert_equal(dict.has({ foo: 123 }), false);
        },
        'array as key'() {
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get([123]), undefined);
            $.$mol_assert_equal(dict.has([123]), false);
            dict.set([123], 321);
            $.$mol_assert_equal(dict.get([123]), 321);
            $.$mol_assert_equal(dict.has([123]), true);
            dict.delete([123]);
            $.$mol_assert_equal(dict.get([123]), undefined);
            $.$mol_assert_equal(dict.has([123]), false);
        },
        'html element as key'() {
            const el = $.$mol_jsx_make("div", null);
            const dict = new $.$mol_dict();
            $.$mol_assert_equal(dict.get(el), undefined);
            $.$mol_assert_equal(dict.has(el), false);
            dict.set(el, 321);
            $.$mol_assert_equal(dict.get(el), 321);
            $.$mol_assert_equal(dict.has(el), true);
            $.$mol_assert_equal(dict.get($.$mol_jsx_make("div", null)), undefined);
            $.$mol_assert_equal(dict.has($.$mol_jsx_make("div", null)), false);
            dict.delete(el);
            $.$mol_assert_equal(dict.get(el), undefined);
            $.$mol_assert_equal(dict.has(el), false);
        },
        'for-of key restore'() {
            const dict = new $.$mol_dict([[123, 321]]);
            const keys = [];
            const vals = [];
            for (const [key, val] of dict) {
                keys.push(key);
                vals.push(val);
            }
            $.$mol_assert_equal(keys.length, 1);
            $.$mol_assert_equal(keys[0], 123);
            $.$mol_assert_equal(vals.length, 1);
            $.$mol_assert_equal(vals[0], 321);
        },
        'forEach key restore'() {
            const dict = new $.$mol_dict([[123, 321]]);
            const keys = [];
            const vals = [];
            dict.forEach((val, key) => {
                keys.push(key);
                vals.push(val);
            });
            $.$mol_assert_equal(keys.length, 1);
            $.$mol_assert_equal(keys[0], 123);
            $.$mol_assert_equal(vals.length, 1);
            $.$mol_assert_equal(vals[0], 321);
        },
    });
})($ || ($ = {}));
//dict.test.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    $.$mol_test({
        'cached property with simple key'() {
            class X extends $.$mol_object {
                foo(id, next) {
                    if (next == null)
                        return new Number(123);
                    return new Number(next);
                }
            }
            __decorate([
                $.$mol_mem_key
            ], X.prototype, "foo", null);
            const x = new X;
            $.$mol_assert_equal(x.foo(0).valueOf(), 123);
            $.$mol_assert_equal(x.foo(0), x.foo(0));
            $.$mol_assert_unique(x.foo(0), x.foo(1));
            x.foo(0, 321);
            $.$mol_assert_equal(x.foo(0).valueOf(), 321);
            x.foo(0, null);
            $.$mol_assert_equal(x.foo(0).valueOf(), 123);
        },
        'cached property with complex key'() {
            class X extends $.$mol_object {
                foo(ids) {
                    return Math.random();
                }
            }
            __decorate([
                $.$mol_mem_key
            ], X.prototype, "foo", null);
            const x = new X;
            $.$mol_assert_equal(x.foo([0, 1]), x.foo([0, 1]));
            $.$mol_assert_unique(x.foo([0, 1]), x.foo([0, 2]));
        },
        'auto sync of properties'() {
            class X extends $.$mol_object {
                foo(next) {
                    return next || 1;
                }
                bar() {
                    return this.foo() + 1;
                }
                xxx() {
                    return this.bar() + 1;
                }
            }
            __decorate([
                $.$mol_mem
            ], X.prototype, "foo", null);
            __decorate([
                $.$mol_mem
            ], X.prototype, "bar", null);
            __decorate([
                $.$mol_mem
            ], X.prototype, "xxx", null);
            const x = new X;
            $.$mol_assert_equal(x.bar(), 2);
            $.$mol_assert_equal(x.xxx(), 3);
            x.foo(5);
            $.$mol_assert_equal(x.xxx(), 7);
        },
        'must be deferred destroyed when no longer referenced'() {
            let foo;
            let foo_destroyed = false;
            class B extends $.$mol_object {
                showing(next) {
                    if (next === void 0)
                        return true;
                    return next;
                }
                foo() {
                    return foo = new class extends $.$mol_object {
                        destructor() {
                            foo_destroyed = true;
                        }
                    };
                }
                bar() {
                    return this.showing() ? this.foo() : null;
                }
            }
            __decorate([
                $.$mol_mem
            ], B.prototype, "showing", null);
            __decorate([
                $.$mol_mem
            ], B.prototype, "foo", null);
            __decorate([
                $.$mol_mem
            ], B.prototype, "bar", null);
            var b = new B;
            var bar = b.bar();
            $.$mol_assert_ok(bar);
            b.showing(false);
            b.bar();
            $.$mol_defer.run();
            $.$mol_assert_ok(foo_destroyed);
            $.$mol_assert_not(b.bar());
            b.showing(true);
            $.$mol_defer.run();
            $.$mol_assert_unique(b.bar(), bar);
        },
        'wait for data'() {
            class Test extends $.$mol_object {
                source(next, force) {
                    new $.$mol_defer(() => {
                        this.source('Jin', $.$mol_atom_force_cache);
                    });
                    return $.$mol_fail_hidden(new $.$mol_atom_wait('Wait for data!'));
                }
                middle() {
                    return this.source();
                }
                target() {
                    return this.middle();
                }
            }
            __decorate([
                $.$mol_mem
            ], Test.prototype, "source", null);
            __decorate([
                $.$mol_mem
            ], Test.prototype, "middle", null);
            __decorate([
                $.$mol_mem
            ], Test.prototype, "target", null);
            const t = new Test;
            $.$mol_assert_fail(() => t.target().valueOf(), $.$mol_atom_wait);
            $.$mol_defer.run();
            $.$mol_assert_equal(t.target(), 'Jin');
        },
    });
})($ || ($ = {}));
//mem.test.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    $.$mol_test({
        'id auto generation'() {
            class $mol_view_test_item extends $.$mol_view {
            }
            class $mol_view_test_block extends $.$mol_view {
                element(id) {
                    return new $mol_view_test_item();
                }
            }
            __decorate([
                $.$mol_mem_key
            ], $mol_view_test_block.prototype, "element", null);
            var x = new $mol_view_test_block();
            $.$mol_assert_equal(x.dom_node().id, '');
            $.$mol_assert_equal(x.element(0).dom_node().id, '.element(0)');
        },
        'caching ref to dom node'() {
            var x = new class extends $.$mol_view {
            };
            $.$mol_assert_equal(x.dom_node(), x.dom_node());
        },
        'content render'() {
            class $mol_view_test extends $.$mol_view {
                sub() {
                    return ['lol', 5];
                }
            }
            var x = new $mol_view_test();
            var node = x.dom_tree();
            $.$mol_assert_equal(node.innerHTML, 'lol5');
        },
        'bem attributes generation'() {
            class $mol_view_test_item extends $.$mol_view {
            }
            class $mol_view_test_block extends $.$mol_view {
                Element(id) {
                    return new $mol_view_test_item();
                }
            }
            __decorate([
                $.$mol_mem_key
            ], $mol_view_test_block.prototype, "Element", null);
            var x = new $mol_view_test_block();
            $.$mol_assert_equal(x.dom_node().getAttribute('mol_view_test_block'), '');
            $.$mol_assert_equal(x.dom_node().getAttribute('mol_view'), '');
            $.$mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view_test_block_element'), '');
            $.$mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view_test_item'), '');
            $.$mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view'), '');
        },
        'render custom attributes'() {
            class $mol_view_test extends $.$mol_view {
                attr() {
                    return {
                        'href': '#haha',
                        'required': true,
                        'hidden': false,
                    };
                }
            }
            var x = new $mol_view_test();
            var node = x.dom_tree();
            $.$mol_assert_equal(node.getAttribute('href'), '#haha');
            $.$mol_assert_equal(node.getAttribute('required'), 'true');
            $.$mol_assert_equal(node.getAttribute('hidden'), null);
        },
        'render custom fields'() {
            class $mol_view_test extends $.$mol_view {
                field() {
                    return {
                        'hidden': true
                    };
                }
            }
            var x = new $mol_view_test();
            var node = x.dom_tree();
            $.$mol_assert_equal(node.hidden, true);
        },
        'attach event handlers'() {
            var clicked = false;
            class $mol_view_test extends $.$mol_view {
                event() {
                    return {
                        'click': (next) => this.event_click(next)
                    };
                }
                event_click(next) {
                    clicked = true;
                }
            }
            var x = new $mol_view_test();
            var node = x.dom_node();
            node.click();
            $.$mol_assert_ok(clicked);
        },
    });
})($ || ($ = {}));
//view.test.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $.$mol_test({
            'handle clicks by default'() {
                let clicked = false;
                const clicker = $$.$mol_button.make({
                    event_click: (event) => { clicked = true; },
                });
                const element = clicker.dom_tree();
                const event = $.$mol_dom_context.document.createEvent('mouseevent');
                event.initEvent('click', true, true);
                element.dispatchEvent(event);
                $.$mol_assert_ok(clicked);
            },
            'no handle clicks if disabled'() {
                let clicked = false;
                const clicker = $$.$mol_button.make({
                    event_click: (event) => { clicked = true; },
                    enabled: () => false,
                });
                const element = clicker.dom_tree();
                const event = $.$mol_dom_context.document.createEvent('mouseevent');
                event.initEvent('click', true, true);
                element.dispatchEvent(event);
                $.$mol_assert_not(clicked);
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//button.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'null by default'() {
            const key = String(Math.random());
            $.$mol_assert_equal($.$mol_state_session.value(key), null);
        },
        'storing'() {
            const key = String(Math.random());
            $.$mol_state_session.value(key, '$mol_state_session_test');
            $.$mol_assert_equal($.$mol_state_session.value(key), '$mol_state_session_test');
            $.$mol_state_session.value(key, null);
            $.$mol_assert_equal($.$mol_state_session.value(key), null);
        },
    });
})($ || ($ = {}));
//session.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'search numbers'() {
            const syntax = new $.$mol_syntax({
                'number': /[+-]?\d+(?:\.\d+)?/
            });
            const serial = (tokens) => {
                return tokens.map(token => `${token.name}=${token.found}`).join('|');
            };
            $.$mol_assert_equal(serial(syntax.tokenize('')), '');
            $.$mol_assert_equal(serial(syntax.tokenize('foo')), '=foo');
            $.$mol_assert_equal(serial(syntax.tokenize('123')), 'number=123');
            $.$mol_assert_equal(serial(syntax.tokenize('foo123bar')), '=foo|number=123|=bar');
            $.$mol_assert_equal(serial(syntax.tokenize('foo123bar456')), '=foo|number=123|=bar|number=456');
            $.$mol_assert_equal(serial(syntax.tokenize('foo123\n\nbar456\n')), '=foo|number=123|=\n\nbar|number=456|=\n');
        }
    });
})($ || ($ = {}));
//syntax.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'only text'() {
            const tokens = $.$mol_syntax_md_flow.tokenize('Hello,\nWorld..\r\n\r\n\nof Love!');
            $.$mol_assert_equal(tokens.map(token => token.found).join('|'), 'Hello,\nWorld..\r\n\r\n\n|of Love!');
        },
        'headers and text'() {
            const tokens = $.$mol_syntax_md_flow.tokenize('# Header1\n\nHello!\n\n## Header2');
            $.$mol_assert_equal(tokens.length, 3);
            $.$mol_assert_equal(tokens[0].name, 'header');
            $.$mol_assert_equal(tokens[0].chunks.join('|'), '#| |Header1|\n\n');
            $.$mol_assert_equal(tokens[1].name, 'block');
            $.$mol_assert_equal(tokens[1].chunks.join('|'), 'Hello!|\n\n');
            $.$mol_assert_equal(tokens[2].name, 'header');
            $.$mol_assert_equal(tokens[2].found, '## Header2');
            $.$mol_assert_equal(tokens[2].chunks.join('|'), '##| |Header2|');
        },
        'codes and text'() {
            const tokens = $.$mol_syntax_md_flow.tokenize('```\nstart()\n```\n\n```js\nrestart()\n```\n\nHello!\n\n```\nstop()\n```');
            $.$mol_assert_equal(tokens.length, 4);
            $.$mol_assert_equal(tokens[0].name, 'code');
            $.$mol_assert_equal(tokens[0].chunks.join('|'), '```||start()\n|```|\n\n');
            $.$mol_assert_equal(tokens[1].name, 'code');
            $.$mol_assert_equal(tokens[1].chunks.join('|'), '```|js|restart()\n|```|\n\n');
            $.$mol_assert_equal(tokens[2].name, 'block');
            $.$mol_assert_equal(tokens[2].chunks.join('|'), 'Hello!|\n\n');
            $.$mol_assert_equal(tokens[3].name, 'code');
            $.$mol_assert_equal(tokens[3].chunks.join('|'), '```||stop()\n|```|');
        },
        'table'() {
            const tokens = $.$mol_syntax_md_flow.tokenize('| header1 | header2\n|----|----\n| Cell11 | Cell12\n| Cell21 | Cell22\n\n| Cell11 | Cell12\n| Cell21 | Cell22\n');
            $.$mol_assert_equal(tokens.length, 2);
            $.$mol_assert_equal(tokens[0].name, 'table');
            $.$mol_assert_equal(tokens[0].chunks[0], '| header1 | header2\n|----|----\n| Cell11 | Cell12\n| Cell21 | Cell22\n');
            $.$mol_assert_equal(tokens[1].name, 'table');
            $.$mol_assert_equal(tokens[1].chunks[0], '| Cell11 | Cell12\n| Cell21 | Cell22\n');
        }
    });
})($ || ($ = {}));
//md.test.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    $.$mol_test_mocks.push(context => {
        class $mol_state_local_mock extends $.$mol_state_local {
            static value(key, next) { return next; }
        }
        __decorate([
            $.$mol_mem_key
        ], $mol_state_local_mock, "value", null);
        context.$mol_state_local = $mol_state_local_mock;
    });
})($ || ($ = {}));
//local.mock.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'local get set delete'() {
            var key = '$mol_state_local_test:' + Math.random();
            $.$mol_assert_equal($.$mol_state_local.value(key), null);
            $.$mol_state_local.value(key, 123);
            $.$mol_assert_equal($.$mol_state_local.value(key), 123);
            $.$mol_state_local.value(key, null);
            $.$mol_assert_equal($.$mol_state_local.value(key), null);
        },
    });
})($ || ($ = {}));
//local.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'const returns stored value'() {
            const foo = { bar: $.$mol_const(Math.random()) };
            $.$mol_assert_equal(foo.bar(), foo.bar());
            $.$mol_assert_equal(foo.bar(), foo.bar['()']);
        },
    });
})($ || ($ = {}));
//const.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'lazy calls'() {
            let calls = 0;
            const list = $.$mol_range2(index => (++calls, index), () => 10);
            $.$mol_assert_ok(list instanceof Array);
            $.$mol_assert_equal(list.length, 10);
            $.$mol_assert_equal(list[-1], -1);
            $.$mol_assert_equal(list[0], 0);
            $.$mol_assert_equal(list[9], 9);
            $.$mol_assert_equal(list[9.5], undefined);
            $.$mol_assert_equal(list[10], 10);
            $.$mol_assert_equal(calls, 4);
        },
        'infinity list'() {
            let calls = 0;
            const list = $.$mol_range2(index => (++calls, index));
            $.$mol_assert_equal(list.length, Number.POSITIVE_INFINITY);
            $.$mol_assert_equal(list[0], 0);
            $.$mol_assert_equal(list[4], 4);
            $.$mol_assert_equal(list[Number.MAX_SAFE_INTEGER], Number.MAX_SAFE_INTEGER);
            $.$mol_assert_equal(list[Number.POSITIVE_INFINITY], Number.POSITIVE_INFINITY);
            $.$mol_assert_equal(calls, 4);
        },
        'stringify'() {
            const list = $.$mol_range2(i => i, () => 5);
            $.$mol_assert_equal(list.toString(), '0,1,2,3,4');
            $.$mol_assert_equal(list.join(';'), '0;1;2;3;4');
        },
        'for-of'() {
            let log = '';
            for (let i of $.$mol_range2(i => i + 1, () => 5)) {
                log += i;
            }
            $.$mol_assert_equal(log, '12345');
        },
        'for-in'() {
            let log = '';
            for (let i in $.$mol_range2(i => i, () => 5)) {
                log += i;
            }
            $.$mol_assert_equal(log, '01234');
        },
        'forEach'() {
            let log = '';
            $.$mol_range2(i => i, () => 5).forEach(i => log += i);
            $.$mol_assert_equal(log, '01234');
        },
        'lazy concat'() {
            let calls1 = 0;
            let calls2 = 0;
            const list = $.$mol_range2(index => (++calls1, index), () => 5).concat([0, 1, 2, 3, 4], $.$mol_range2(index => (++calls2, index), () => 5));
            $.$mol_assert_ok(list instanceof Array);
            $.$mol_assert_equal(list.length, 15);
            $.$mol_assert_equal(list[0], 0);
            $.$mol_assert_equal(list[4], 4);
            $.$mol_assert_equal(list[5], 0);
            $.$mol_assert_equal(list[9], 4);
            $.$mol_assert_equal(list[10], 0);
            $.$mol_assert_equal(list[14], 4);
            $.$mol_assert_equal(list[15], 5);
            $.$mol_assert_equal(calls1, 2);
            $.$mol_assert_equal(calls2, 3);
        },
        'filter'() {
            let calls = 0;
            const list = $.$mol_range2(index => (++calls, index), () => 10).filter(v => v % 2).slice(0, 3);
            $.$mol_assert_ok(list instanceof Array);
            $.$mol_assert_equal(list.length, 3);
            $.$mol_assert_equal(list[0], 1);
            $.$mol_assert_equal(list[2], 5);
            $.$mol_assert_equal(list[3], 7);
            $.$mol_assert_equal(calls, 10);
        },
        'reduce'() {
            let calls = 0;
            const list = $.$mol_range2().slice(1, 6);
            $.$mol_assert_equal(list.reduce((s, v) => s + v), 15);
            $.$mol_assert_equal(list.reduce((s, v) => s + v, 5), 20);
        },
        'lazy map'() {
            let calls1 = 0;
            let calls2 = 0;
            const source = $.$mol_range2(index => (++calls1, index), () => 5);
            const target = source.map((item, index, self) => {
                ++calls2;
                $.$mol_assert_equal(source, self);
                return index + 10;
            }, () => 5);
            $.$mol_assert_ok(target instanceof Array);
            $.$mol_assert_equal(target.length, 5);
            $.$mol_assert_equal(target[0], 10);
            $.$mol_assert_equal(target[4], 14);
            $.$mol_assert_equal(target[5], 15);
            $.$mol_assert_equal(calls1, 3);
            $.$mol_assert_equal(calls2, 3);
        },
        'lazy slice'() {
            let calls = 0;
            const list = $.$mol_range2(index => (++calls, index), () => 10).slice(3, 7);
            $.$mol_assert_ok(list instanceof Array);
            $.$mol_assert_equal(list.length, 4);
            $.$mol_assert_equal(list[0], 3);
            $.$mol_assert_equal(list[3], 6);
            $.$mol_assert_equal(list[4], 7);
            $.$mol_assert_equal(calls, 3);
        },
        'lazy some'() {
            let calls = 0;
            $.$mol_assert_ok($.$mol_range2(index => (++calls, index), () => 5).some(v => v >= 2));
            $.$mol_assert_equal(calls, 3);
            $.$mol_assert_not($.$mol_range2(i => i, () => 0).some(v => true));
            $.$mol_assert_ok($.$mol_range2(i => i).some(v => v > 5));
        },
        'lazy every'() {
            let calls = 0;
            $.$mol_assert_not($.$mol_range2(index => (++calls, index), () => 5).every(v => v < 2));
            $.$mol_assert_equal(calls, 3);
            $.$mol_assert_ok($.$mol_range2(i => i, () => 0).every(v => false));
            $.$mol_assert_not($.$mol_range2(i => i).every(v => v < 5));
        },
        'lazyfy'() {
            let calls = 0;
            const list = new $.$mol_range2_array(...[0, 1, 2, 3, 4, 5]).map(i => (++calls, i + 10)).slice(2);
            $.$mol_assert_ok(list instanceof Array);
            $.$mol_assert_equal(list.length, 4);
            $.$mol_assert_equal(calls, 0);
            $.$mol_assert_equal(list[0], 12);
            $.$mol_assert_equal(list[3], 15);
            $.$mol_assert_equal(list[4], Number.NaN);
            $.$mol_assert_equal(calls, 3);
        },
        'prevent modification'() {
            const list = $.$mol_range2(i => i, () => 5);
            $.$mol_assert_fail(() => list.push(4), TypeError);
            $.$mol_assert_fail(() => list.pop(), TypeError);
            $.$mol_assert_fail(() => list.unshift(4), TypeError);
            $.$mol_assert_fail(() => list.shift(), TypeError);
            $.$mol_assert_fail(() => list.splice(1, 2), TypeError);
            $.$mol_assert_fail(() => list[1] = 2, TypeError);
            $.$mol_assert_equal(list.toString(), '0,1,2,3,4');
        }
    });
})($ || ($ = {}));
//range2.test.js.map
;
"use strict";
//equals.test.js.map
;
"use strict";
//equals.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $.$mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror')[0];
        if (error)
            throw new Error(error.textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//parse.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'Attach to document'() {
            const doc = $.$mol_dom_parse('<html><body id="/foo"></body></html>');
            $.$mol_jsx_attach(doc, () => $.$mol_jsx_make("body", { id: "/foo" }, "bar"));
            $.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">bar</body></html>');
        },
    });
})($ || ($ = {}));
//attach.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_jsx_attach(next, action) {
        const prev = $.$mol_jsx_document;
        try {
            $.$mol_jsx_document = next;
            return action();
        }
        finally {
            $.$mol_jsx_document = prev;
        }
    }
    $.$mol_jsx_attach = $mol_jsx_attach;
})($ || ($ = {}));
//attach.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_class(Class) {
        Class[Symbol.toStringTag] = Class.name;
        if (!Class.prototype.hasOwnProperty(Symbol.toStringTag)) {
            Class.prototype[Symbol.toStringTag] = '<' + Class.name + '>';
        }
        return Class;
    }
    $.$mol_class = $mol_class;
})($ || ($ = {}));
//class.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $mol_object2_1;
    let $mol_object2 = $mol_object2_1 = class $mol_object2 extends Object {
        constructor(init) {
            super();
            if (init)
                init(this);
        }
        static get $$() { return this.$; }
        get $$() { return this.$; }
        static make(init) {
            return new this(init);
        }
        static toString() { return this[Symbol.toStringTag] || this.name; }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this.toString();
        }
    };
    $mol_object2.$ = $;
    $mol_object2 = $mol_object2_1 = __decorate([
        $.$mol_class
    ], $mol_object2);
    $.$mol_object2 = $mol_object2;
    Object.defineProperty($mol_object2.prototype, '$', { value: $mol_object2.$, enumerable: false, writable: true });
})($ || ($ = {}));
//object2.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    $.$mol_test({
        'run callback'() {
            let Plus1 = class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            };
            Plus1 = __decorate([
                $.$mol_class
            ], Plus1);
            $.$mol_assert_equal(Plus1.run(() => 2), 3);
        },
        'wrap function'() {
            let Plus1 = class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            };
            Plus1 = __decorate([
                $.$mol_class
            ], Plus1);
            const obj = {
                level: 2,
                pow: Plus1.func(function (a) {
                    return a ** this.level;
                })
            };
            $.$mol_assert_equal(obj.pow(2), 5);
        },
        'decorate instance method'() {
            let Plus1 = class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            };
            Plus1 = __decorate([
                $.$mol_class
            ], Plus1);
            class Foo1 {
                constructor() {
                    this.level = 2;
                }
                pow(a) {
                    return a ** this.level;
                }
            }
            __decorate([
                Plus1.method
            ], Foo1.prototype, "pow", null);
            const Foo2 = Foo1;
            const foo = new Foo2;
            $.$mol_assert_equal(foo.pow(2), 5);
        },
        'decorate static method'() {
            let Plus1 = class Plus1 extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            };
            Plus1 = __decorate([
                $.$mol_class
            ], Plus1);
            let Foo = class Foo {
                static pow(a) {
                    return a ** this.level;
                }
            };
            Foo.level = 2;
            __decorate([
                Plus1.method
            ], Foo, "pow", null);
            Foo = __decorate([
                $.$mol_class
            ], Foo);
            $.$mol_assert_equal(Foo.pow(2), 5);
        },
        'decorate class'() {
            let BarInc = class BarInc extends $.$mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        const foo = task.call(this, ...args);
                        foo.bar++;
                        return foo;
                    };
                }
            };
            BarInc = __decorate([
                $.$mol_class
            ], BarInc);
            let Foo = class Foo {
                constructor(bar) {
                    this.bar = bar;
                }
            };
            Foo = __decorate([
                BarInc.class,
                $.$mol_class
            ], Foo);
            $.$mol_assert_equal(new Foo(2).bar, 3);
        },
    });
})($ || ($ = {}));
//wrapper.test.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    let $mol_wrapper = class $mol_wrapper extends $.$mol_object2 {
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            const wrapped = this.wrap(func);
            Object.defineProperty(wrapped, 'name', {
                value: `${func.name || '<anonymous>'}|${this.name}`
            });
            return wrapped;
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
    };
    $mol_wrapper = __decorate([
        $.$mol_class
    ], $mol_wrapper);
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//wrapper.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_after_mock_queue = [];
    function $mol_after_mock_warp() {
        const queue = $.$mol_after_mock_queue.splice(0);
        for (const task of queue)
            task();
    }
    $.$mol_after_mock_warp = $mol_after_mock_warp;
    class $mol_after_mock_commmon extends $.$mol_object2 {
        constructor(task) {
            super();
            this.task = task;
            this.promise = Promise.resolve();
            this.cancelled = false;
            $.$mol_after_mock_queue.push(task);
        }
        destructor() {
            const index = $.$mol_after_mock_queue.indexOf(this.task);
            if (index >= 0)
                $.$mol_after_mock_queue.splice(index, 1);
        }
    }
    $.$mol_after_mock_commmon = $mol_after_mock_commmon;
    class $mol_after_mock_timeout extends $mol_after_mock_commmon {
        constructor(delay, task) {
            super(task);
            this.delay = delay;
        }
    }
    $.$mol_after_mock_timeout = $mol_after_mock_timeout;
})($ || ($ = {}));
//mock.test.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        $.$mol_after_timeout = $_1.$mol_after_mock_timeout;
    });
})($ || ($ = {}));
//timeout.test.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $.$mol_object2 {
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//timeout.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $.$mol_after_timeout {
        constructor(task) {
            super(16, task);
            this.task = task;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//frame.node.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push($ => {
        $.$mol_after_frame = $_1.$mol_after_mock_commmon;
    });
})($ || ($ = {}));
//frame.test.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_test({
        'trim array'() {
            const array = [undefined, null, 0, false, null, undefined, undefined];
            const correct = [undefined, null, 0, false, null];
            $.$mol_array_trim(array);
            $.$mol_assert_like(array, correct);
        }
    });
})($ || ($ = {}));
//trim.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_array_trim(array) {
        let last = array.length;
        while (last > 0) {
            --last;
            const value = array[last];
            if (value === undefined)
                array.pop();
            else
                break;
        }
        return array;
    }
    $.$mol_array_trim = $mol_array_trim;
})($ || ($ = {}));
//trim.js.map
;
"use strict";
var $;
(function ($_1) {
    $_1.$mol_test_mocks.push(async ($) => {
        await $_1.$mol_fiber_warp();
        $_1.$mol_fiber.deadline = Date.now() + 100;
    });
})($ || ($ = {}));
//fiber.test.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $mol_fiber_1;
    function $mol_fiber_defer(calculate) {
        const fiber = new $mol_fiber;
        fiber.calculate = calculate;
        fiber[Symbol.toStringTag] = calculate.name;
        fiber.schedule();
        return fiber;
    }
    $.$mol_fiber_defer = $mol_fiber_defer;
    function $mol_fiber_func(calculate) {
        console.warn('$mol_fiber_func is deprecated. Use $mol_fiber.func instead.');
        return $mol_fiber.func(calculate);
    }
    $.$mol_fiber_func = $mol_fiber_func;
    function $mol_fiber_root(calculate) {
        const wrapper = function (...args) {
            const fiber = new $mol_fiber();
            fiber.calculate = calculate.bind(this, ...args);
            return fiber.wake();
        };
        wrapper[Symbol.toStringTag] = calculate.name;
        return wrapper;
    }
    $.$mol_fiber_root = $mol_fiber_root;
    function $mol_fiber_method(obj, name, descr) {
        console.warn('$mol_fiber_method is deprecated. Use $mol_fiber.method instead.');
        return $mol_fiber.method(obj, name, descr);
    }
    $.$mol_fiber_method = $mol_fiber_method;
    function $mol_fiber_sync(request) {
        return function $mol_fiber_sync_wrapper(...args) {
            const slave = $mol_fiber.current;
            let master = slave && slave.master;
            if (!master || master.constructor !== $mol_fiber) {
                master = new $mol_fiber;
                master.cursor = -3;
                master.error = request.call(this, ...args).then(res => master.push(res), err => master.fail(err));
                const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                master[Symbol.toStringTag] = prefix + (request.name || $mol_fiber_sync.name);
            }
            return master.get();
        };
    }
    $.$mol_fiber_sync = $mol_fiber_sync;
    async function $mol_fiber_warp() {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            while ($mol_fiber.queue.length)
                await $mol_fiber.tick();
            return Promise.resolve();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_warp = $mol_fiber_warp;
    function $mol_fiber_fence(func) {
        const prev = $mol_fiber.current;
        try {
            $mol_fiber.current = null;
            return func();
        }
        finally {
            $mol_fiber.current = prev;
        }
    }
    $.$mol_fiber_fence = $mol_fiber_fence;
    function $mol_fiber_unlimit(task) {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            return task();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_unlimit = $mol_fiber_unlimit;
    let $mol_fiber_solid = class $mol_fiber_solid extends $.$mol_wrapper {
        static func(task) {
            function wrapped(...args) {
                const deadline = $mol_fiber.deadline;
                try {
                    $mol_fiber.deadline = Number.POSITIVE_INFINITY;
                    return task.call(this, ...args);
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail(new Error('Solid fiber can not be suspended.'));
                    return $.$mol_fail_hidden(error);
                }
                finally {
                    $mol_fiber.deadline = deadline;
                }
            }
            Object.defineProperty(wrapped, 'name', {
                value: `${task.name || '<anonymous>'}|${this.name}`
            });
            return $mol_fiber.func(wrapped);
        }
    };
    $mol_fiber_solid = __decorate([
        $.$mol_class
    ], $mol_fiber_solid);
    $.$mol_fiber_solid = $mol_fiber_solid;
    let $mol_fiber = $mol_fiber_1 = class $mol_fiber extends $.$mol_wrapper {
        constructor() {
            super(...arguments);
            this.value = undefined;
            this.error = null;
            this.cursor = 0;
            this.masters = [];
        }
        static wrap(task) {
            return function (...args) {
                const slave = $mol_fiber_1.current;
                let master = slave && slave.master;
                if (!master || master.constructor !== $mol_fiber_1) {
                    master = new $mol_fiber_1;
                    master.calculate = task.bind(this, ...args);
                    const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                    master[Symbol.toStringTag] = `${prefix}${task.name}`;
                }
                return master.get();
            };
        }
        static async tick() {
            while ($mol_fiber_1.queue.length > 0) {
                if (Date.now() > $mol_fiber_1.deadline) {
                    $mol_fiber_1.schedule();
                    return;
                }
                const task = $mol_fiber_1.queue.shift();
                await task();
            }
        }
        static schedule() {
            if (!$mol_fiber_1.scheduled) {
                $mol_fiber_1.scheduled = new $.$mol_after_frame(() => {
                    $mol_fiber_1.deadline = Math.max($mol_fiber_1.deadline, Date.now() + $mol_fiber_1.quant);
                    $mol_fiber_1.scheduled = null;
                    $mol_fiber_1.tick();
                });
            }
            const promise = new this.$.Promise(done => this.queue.push(() => (done(), promise)));
            return promise;
        }
        schedule() {
            $mol_fiber_1.schedule().then($.$mol_log_group('$mol_fiber_scheduled', this.wake.bind(this)));
        }
        wake() {
            this.$.$mol_log(this, '⏰');
            try {
                if (this.cursor > -2)
                    return this.get();
            }
            catch (error) {
                if ('then' in error)
                    return;
                $.$mol_fail_hidden(error);
            }
        }
        push(value) {
            value = this.$.$mol_conform(value, this.value);
            if (!$.$mol_compare_any(this.value, value)) {
                this.$.$mol_log(this, value, '🠈', this.value);
                this.obsolete_slaves();
                this.forget();
            }
            else {
                this.$.$mol_log(this, '✔', value);
                if (this.error)
                    this.obsolete_slaves();
            }
            this.error = null;
            this.value = value;
            this.complete();
            return value;
        }
        fail(error) {
            this.complete();
            this.error = error;
            this.$.$mol_log(this, '🔥', error.message);
            this.obsolete_slaves();
            return error;
        }
        wait(promise) {
            this.error = promise;
            this.$.$mol_log(this, '💤');
            this.cursor = 0;
            return promise;
        }
        complete() {
            if (this.cursor <= -2)
                return;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
            this.cursor = -2;
        }
        complete_master(master_index) {
            this.disobey(master_index);
        }
        pull() {
            this.push(this.calculate());
        }
        update() {
            const slave = $mol_fiber_1.current;
            try {
                this.error = null;
                this.limit();
                $mol_fiber_1.current = this;
                this.$.$mol_log(this, '►');
                this.pull();
            }
            catch (error) {
                if ('then' in error) {
                    if (!slave) {
                        const listener = this.wake.bind(this);
                        error = error.then(listener, listener);
                    }
                    this.wait(error);
                }
                else {
                    this.fail(error);
                }
            }
            finally {
                $mol_fiber_1.current = slave;
            }
        }
        get() {
            if (this.cursor > 0)
                this.$.$mol_fail(new Error('Cyclic dependency'));
            const slave = $mol_fiber_1.current;
            if (slave)
                slave.master = this;
            if (this.cursor > -2)
                this.update();
            if (this.error)
                return this.$.$mol_fail_hidden(this.error);
            return this.value;
        }
        limit() {
            if (!$mol_fiber_1.current)
                return;
            const now = Date.now();
            const overtime = now - $mol_fiber_1.deadline;
            if (overtime < 0)
                return;
            if (overtime > 500) {
                $mol_fiber_1.deadline = now + $mol_fiber_1.quant;
                return;
            }
            this.$.$mol_fail_hidden($mol_fiber_1.schedule());
        }
        get master() {
            return this.masters[this.cursor];
        }
        set master(next) {
            if (this.cursor === -1)
                return;
            const cursor = this.cursor;
            const prev = this.masters[this.cursor];
            if (prev !== next) {
                if (prev)
                    this.rescue(prev, cursor);
                this.masters[cursor] = next;
                this.masters[cursor + 1] = this.obey(next, cursor);
            }
            this.cursor = cursor + 2;
        }
        rescue(master, master_index) { }
        obey(master, master_index) { return -1; }
        lead(slave, master_index) { return -1; }
        dislead(slave_index) {
            this.destructor();
        }
        disobey(master_index) {
            const master = this.masters[master_index];
            if (!master)
                return;
            master.dislead(this.masters[master_index + 1]);
            this.masters[master_index] = undefined;
            this.masters[master_index + 1] = undefined;
            this.$.$mol_array_trim(this.masters);
        }
        obsolete_slaves() { }
        obsolete(master_index) { }
        forget() {
            this.value = undefined;
        }
        abort() {
            this.forget();
            return true;
        }
        destructor() {
            if (!this.abort())
                return;
            this.$.$mol_log(this, '🕱', this.value);
            this.complete();
        }
    };
    $mol_fiber.quant = 32;
    $mol_fiber.deadline = 0;
    $mol_fiber.current = null;
    $mol_fiber.scheduled = null;
    $mol_fiber.queue = [];
    $mol_fiber = $mol_fiber_1 = __decorate([
        $.$mol_class
    ], $mol_fiber);
    $.$mol_fiber = $mol_fiber;
})($ || ($ = {}));
//fiber.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        if (!having)
            return false;
        if (typeof having !== 'object')
            return false;
        if (!('destructor' in having))
            return false;
        return true;
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having) {
        if (!$mol_owning_allow(having))
            return;
        return $.$mol_owning_map.get(having);
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//owning.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($_1) {
    $_1.$mol_test({
        'Value has js-path name'() {
            let App = class App extends $_1.$mol_object2 {
                static get title() { return new $_1.$mol_object2; }
            };
            __decorate([
                $_1.$mol_atom2_field
            ], App, "title", null);
            App = __decorate([
                $_1.$mol_class
            ], App);
            $_1.$mol_assert_equal(`${App.title}`, 'App.title');
        },
        'Simple property'() {
            class App extends $_1.$mol_object2 {
            }
            App.value = 1;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "value", void 0);
            $_1.$mol_assert_equal(App.value, 1);
            App.value = 2;
            $_1.$mol_assert_equal(App.value, 2);
        },
        'Instant actualization'() {
            class Source extends $_1.$mol_object2 {
                constructor() {
                    super(...arguments);
                    this.value = 1;
                }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], Source.prototype, "value", void 0);
            class App extends $_1.$mol_object2 {
                static get source() { return Source.make(); }
                static get value() { return this.source.value + 1; }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], App, "source", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "value", null);
            $_1.$mol_assert_equal(App.value, 2);
            App.source.value = 2;
            $_1.$mol_assert_equal(App.value, 3);
        },
        'Access to cached value'() {
            class App extends $_1.$mol_object2 {
                static get value() { return 1; }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], App, "value", null);
            $_1.$mol_assert_equal($_1.$mol_atom2_value(() => App.value), undefined);
            $_1.$mol_assert_equal(App.value, 1);
            $_1.$mol_assert_equal($_1.$mol_atom2_value(() => App.value), 1);
        },
        'Do not recalc slaves on equal changes'() {
            class App extends $_1.$mol_object2 {
                static get result() { return this.first[0] + this.counter++; }
            }
            App.first = [1];
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.first = [1];
            $_1.$mol_assert_equal(App.result, 1);
        },
        'Do not recalc grand slave on equal direct slave result '() {
            class App extends $_1.$mol_object2 {
                static get second() { return Math.abs(this.first); }
                static get result() { return this.second + ++this.counter; }
            }
            App.first = 1;
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 2);
            App.first = -1;
            $_1.$mol_assert_equal(App.result, 2);
        },
        'Recalc when [not changed master] changes [following master]'() {
            class App extends $_1.$mol_object2 {
                static get second() {
                    this.third = this.first;
                    return 0;
                }
                static get result() { return this.second + this.third + ++this.counter; }
            }
            App.first = 1;
            App.third = 0;
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "third", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 2);
            App.first = 5;
            $_1.$mol_assert_equal(App.result, 7);
        },
        'Branch switching'() {
            class App extends $_1.$mol_object2 {
                static get second() { return 2; }
                static get result() {
                    return (this.condition ? this.first : this.second) + this.counter++;
                }
            }
            App.first = 1;
            App.condition = true;
            App.counter = 0;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.condition = false;
            $_1.$mol_assert_equal(App.result, 3);
            App.first = 10;
            $_1.$mol_assert_equal(App.result, 3);
        },
        'Forbidden self invalidation'() {
            class App extends $_1.$mol_object2 {
                static get second() { return this.first + 1; }
                static get result() {
                    this.second;
                    return this.first++;
                }
            }
            App.first = 1;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_fail(() => App.result);
        },
        'Side effect inside computation'() {
            class App extends $_1.$mol_object2 {
                static increase() { return ++this.first; }
                static get result() {
                    return this.increase() + 1;
                }
            }
            App.first = 1;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", void 0);
            __decorate([
                $_1.$mol_fiber.method
            ], App, "increase", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 3);
        },
        'Forbidden cyclic dependency'() {
            class App extends $_1.$mol_object2 {
                static get first() { return this.second - 1; }
                static get second() { return this.first + 1; }
            }
            __decorate([
                $_1.$mol_atom2_field
            ], App, "first", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "second", null);
            $_1.$mol_assert_fail(() => App.first);
        },
        'Forget sub fibers on complete'() {
            class App extends $_1.$mol_object2 {
                static count() { return this.counter++; }
                static get result() { return this.count() + this.data; }
            }
            App.counter = 0;
            App.data = 1;
            __decorate([
                $_1.$mol_fiber.method
            ], App, "count", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "data", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.data = 2;
            $_1.$mol_assert_equal(App.result, 3);
        },
        async 'Automatic destroy owned value on self destruction'() {
            let counter = 0;
            class Having extends $_1.$mol_object2 {
                destructor() { counter++; }
            }
            class App extends $_1.$mol_object2 {
                static get having() { return Having.make(); }
                static get result() {
                    if (this.condition)
                        this.having;
                    return 0;
                }
            }
            App.condition = true;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "having", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            App.result;
            App.condition = false;
            App.result;
            $_1.$mol_assert_equal(counter, 0);
            await $_1.$mol_fiber_warp();
            $_1.$mol_assert_equal(counter, 1);
        },
        async 'Do not destroy putted value'() {
            class App extends $_1.$mol_object2 {
                static get target() {
                    return this.condition ? this.source : 0;
                }
            }
            App.condition = true;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "source", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "target", null);
            App.source = 1;
            $_1.$mol_assert_equal(App.target, 1);
            App.condition = false;
            $_1.$mol_assert_equal(App.target, 0);
            await $_1.$mol_fiber_warp();
            App.condition = true;
            $_1.$mol_assert_equal(App.target, 1);
        },
        'Restore after error'() {
            class App extends $_1.$mol_object2 {
                static get broken() {
                    if (this.condition)
                        $_1.$mol_fail(new Error('test error'));
                    return 1;
                }
                static get result() { return this.broken; }
            }
            App.condition = false;
            __decorate([
                $_1.$mol_atom2_field
            ], App, "condition", void 0);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "broken", null);
            __decorate([
                $_1.$mol_atom2_field
            ], App, "result", null);
            $_1.$mol_assert_equal(App.result, 1);
            App.condition = true;
            $_1.$mol_assert_fail(() => App.result);
            App.condition = false;
            $_1.$mol_assert_equal(App.result, 1);
        },
        async 'auto fresh only when alive'($) {
            let state = 1;
            const monitor = new $.$mol_atom2;
            monitor.calculate = () => {
                new $.$mol_after_frame($_1.$mol_atom2.current.fresh);
                return state;
            };
            $_1.$mol_assert_equal(monitor.get(), 1);
            state = 2;
            $_1.$mol_assert_equal(monitor.get(), 1);
            $.$mol_after_mock_warp();
            $_1.$mol_assert_equal(monitor.get(), 2);
            state = 3;
            $_1.$mol_assert_equal(monitor.get(), 2);
            monitor.destructor();
            $_1.$mol_assert_equal(monitor.value, undefined);
            $.$mol_after_mock_warp();
            await $.$mol_fiber_warp();
            $_1.$mol_assert_equal(monitor.value, undefined);
        },
    });
})($ || ($ = {}));
//atom2.test.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    var $mol_atom2_1;
    function $mol_atom2_value(task) {
        const cached = $mol_atom2.cached;
        try {
            $mol_atom2.cached = true;
            return task();
        }
        finally {
            $mol_atom2.cached = cached;
        }
    }
    $.$mol_atom2_value = $mol_atom2_value;
    let $mol_atom2 = $mol_atom2_1 = class $mol_atom2 extends $.$mol_fiber {
        constructor() {
            super(...arguments);
            this.slaves = [];
            this._value = undefined;
            this._error = null;
        }
        static get current() {
            const atom = $.$mol_fiber.current;
            if (atom instanceof $mol_atom2_1)
                return atom;
            return null;
        }
        static reap(atom) {
            this.reap_queue.push(atom);
            if (this.reap_task)
                return;
            this.reap_task = $.$mol_fiber_defer(() => {
                this.reap_task = null;
                while (true) {
                    const atom = this.reap_queue.pop();
                    if (!atom)
                        break;
                    if (!atom.alone)
                        continue;
                    atom.destructor();
                }
            });
        }
        rescue(master, cursor) {
            const master_index = this.masters.length;
            const slave_index = this.masters[cursor + 1] + 1;
            master.slaves[slave_index] = master_index;
            this.masters.push(master, this.masters[cursor + 1]);
        }
        get() {
            if ($mol_atom2_1.cached)
                return this.value;
            const value = super.get();
            if (value === undefined)
                $.$mol_fail(new Error(`Not defined: ${this}`));
            return value;
        }
        pull() {
            if (this.cursor === 0)
                return super.pull();
            this.$.$mol_log(this, '⏭');
            const masters = this.masters;
            for (let index = 0; index < masters.length; index += 2) {
                const master = masters[index];
                if (!master)
                    continue;
                try {
                    master.get();
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail_hidden(error);
                    this.cursor = 0;
                }
                if (this.cursor !== 0)
                    continue;
                this.$.$mol_log(this, '⏯');
                return super.pull();
            }
            this.$.$mol_log(this, '✔✔', this.value);
            this.cursor = -2;
            return this.value;
        }
        get value() { return this._value; }
        set value(next) {
            const prev = this._value;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next))
                next[Symbol.toStringTag] = this[Symbol.toStringTag];
            this._value = next;
        }
        get error() { return this._error; }
        set error(next) {
            const prev = this._error;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next))
                next[Symbol.toStringTag] = this[Symbol.toStringTag];
            this._error = next;
        }
        put(next) {
            this.push(next);
            this.cursor = -3;
        }
        complete_master(master_index) {
            if (this.masters[master_index] instanceof $mol_atom2_1) {
                if (master_index >= this.cursor)
                    this.disobey(master_index);
            }
            else {
                this.disobey(master_index);
            }
        }
        obey(master, master_index) {
            return master.lead(this, master_index);
        }
        lead(slave, master_index) {
            this.$.$mol_log(this, '☍', slave);
            const slave_index = this.slaves.length;
            this.slaves[slave_index] = slave;
            this.slaves[slave_index + 1] = master_index;
            return slave_index;
        }
        dislead(slave_index) {
            if (slave_index < 0)
                return;
            this.$.$mol_log(this, '☌', this.slaves[slave_index]);
            this.slaves[slave_index] = undefined;
            this.slaves[slave_index + 1] = undefined;
            $.$mol_array_trim(this.slaves);
            if (this.cursor > -3 && this.alone)
                $mol_atom2_1.reap(this);
        }
        obsolete(master_index = -1) {
            if (this.cursor > 0) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Obsoleted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor === 0)
                return;
            this.$.$mol_log(this, '✘');
            if (this.cursor !== -1)
                this.doubt_slaves();
            this.cursor = 0;
        }
        doubt(master_index = -1) {
            if (this.cursor > 0) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Doubted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor >= -1)
                return;
            this.$.$mol_log(this, '�');
            this.cursor = -1;
            this.doubt_slaves();
        }
        obsolete_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.obsolete(this.slaves[index + 1]);
            }
        }
        doubt_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.doubt(this.slaves[index + 1]);
            }
        }
        get fresh() {
            return () => {
                if (this.cursor !== -2)
                    return;
                this.cursor = 0;
                $.$mol_fiber_solid.run(() => this.update());
            };
        }
        get alone() {
            return this.slaves.length === 0;
        }
        get derived() {
            for (let index = 0; index < this.masters.length; index += 2) {
                if (this.masters[index])
                    return true;
            }
            return false;
        }
        destructor() {
            if (!this.abort())
                return;
            this.$.$mol_log(this, '🕱', this.value);
            this.cursor = -3;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
        }
    };
    $mol_atom2.cached = false;
    $mol_atom2.reap_task = null;
    $mol_atom2.reap_queue = [];
    $mol_atom2 = $mol_atom2_1 = __decorate([
        $.$mol_class
    ], $mol_atom2);
    $.$mol_atom2 = $mol_atom2;
})($ || ($ = {}));
//atom2.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    $.$mol_test({
        'Property method'() {
            class App extends $.$mol_object2 {
                static value(next = 1) { return next + 1; }
            }
            __decorate([
                $.$mol_atom2_prop
            ], App, "value", null);
            $.$mol_assert_equal(App.value(), 2);
            App.value(2);
            $.$mol_assert_equal(App.value(), 3);
        },
    });
})($ || ($ = {}));
//prop.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_prop(proto, name, descr) {
        const value = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host) => {
            let cache = store.get(host);
            if (!cache) {
                cache = new $.$mol_atom2;
                cache.calculate = value.bind(host);
                cache[Symbol.toStringTag] = `${host}.${name}()`;
                cache.abort = () => {
                    store.delete(host);
                    cache.forget();
                    return true;
                };
                $.$mol_owning_catch(host, cache);
                store.set(host, cache);
            }
            return cache;
        };
        return {
            value(next, force) {
                if (next === undefined) {
                    const cache = get_cache(this);
                    if (force === $.$mol_atom_force_cache)
                        cache.obsolete(Number.NaN);
                    return cache.get();
                }
                return $.$mol_fiber.run(() => {
                    if (force !== $.$mol_atom_force_cache)
                        next = value.call(this, next);
                    return get_cache(this).put(next);
                });
            }
        };
    }
    $.$mol_atom2_prop = $mol_atom2_prop;
})($ || ($ = {}));
//prop.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_field(proto, name, descr) {
        if (!descr)
            descr = Object.getOwnPropertyDescriptor(proto, name);
        const get = descr ? (descr.get || $.$mol_const(descr.value)) : (() => undefined);
        const set = descr && descr.set || function (next) { get_cache(this).put(next); };
        const store = new WeakMap();
        Object.defineProperty(proto, name + "@", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host) => {
            let cache = store.get(host);
            if (!cache) {
                cache = new $.$mol_atom2;
                cache.calculate = get.bind(host);
                cache[Symbol.toStringTag] = `${host}.${name}`;
                cache.abort = () => {
                    store.delete(host);
                    cache.forget();
                    return true;
                };
                store.set(host, cache);
            }
            return cache;
        };
        return {
            get() {
                return get_cache(this).get();
            },
            set,
        };
    }
    $.$mol_atom2_field = $mol_atom2_field;
})($ || ($ = {}));
//field.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    $.$mol_test({
        async 'Autorun'() {
            class App extends $.$mol_object2 {
                static get init() {
                    ++this.counter;
                    return this.state;
                }
            }
            App.state = 1;
            App.counter = 0;
            __decorate([
                $.$mol_atom2_field
            ], App, "state", void 0);
            __decorate([
                $.$mol_atom2_field
            ], App, "init", null);
            const autorun = $.$mol_atom2_autorun(() => App.init);
            try {
                await $.$mol_fiber_warp();
                $.$mol_assert_equal(App.counter, 1);
                App.state = 2;
                $.$mol_assert_equal(App.counter, 1);
                await $.$mol_fiber_warp();
                $.$mol_assert_equal(App.counter, 2);
                App.state = 3;
            }
            finally {
                autorun.destructor();
            }
            App.state = 4;
            await $.$mol_fiber_warp();
            $.$mol_assert_equal(App.counter, 2);
        },
    });
})($ || ($ = {}));
//autorun.test.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_autorun(calculate) {
        return $.$mol_atom2.make(atom => {
            atom.calculate = calculate;
            atom.obsolete_slaves = atom.schedule;
            atom.doubt_slaves = atom.schedule;
            atom[Symbol.toStringTag] = calculate[Symbol.toStringTag] || calculate.name || '$mol_atom2_autorun';
            atom.schedule();
        });
    }
    $.$mol_atom2_autorun = $mol_atom2_autorun;
})($ || ($ = {}));
//autorun.js.map
;
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    $.$mol_test({
        'Class as component'() {
            class Foo extends $.$mol_jsx_view {
                constructor() {
                    super(...arguments);
                    this.title = '';
                }
                render() {
                    return $.$mol_jsx_make("div", null,
                        this.title,
                        " ",
                        this.childNodes.join('-'));
                }
            }
            const dom = $.$mol_jsx_make(Foo, { id: "/foo", title: "bar" },
                "xxx",
                123);
            $.$mol_assert_equal(dom.outerHTML, '<div id="/foo">bar xxx-123</div>');
        },
        'View by element'() {
            class Br extends $.$mol_jsx_view {
                render() {
                    view = this;
                    return $.$mol_jsx_make("br", { id: "/foo" });
                }
            }
            let view;
            $.$mol_assert_equal(Br.of($.$mol_jsx_make(Br, null)), view);
        },
        'Attached view rerender'() {
            const doc = $.$mol_dom_parse('<html><body id="/foo"></body></html>');
            class Title extends $.$mol_jsx_view {
                constructor() {
                    super(...arguments);
                    this.value = 'foo';
                }
                render() {
                    return $.$mol_jsx_make("div", null, this.value);
                }
            }
            const dom = $.$mol_jsx_attach(doc, () => $.$mol_jsx_make(Title, { id: "/foo" }));
            const title = Title.of(dom);
            $.$mol_assert_equal(title.ownerDocument, doc);
            $.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">foo</body></html>');
            title.value = 'bar';
            title.valueOf();
            $.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">bar</body></html>');
        },
        async 'Reactive attached view'() {
            const doc = $.$mol_dom_parse('<html><body id="/foo"></body></html>');
            class Task {
                title(next) { return next || 'foo'; }
            }
            __decorate([
                $.$mol_atom2_prop
            ], Task.prototype, "title", null);
            class App extends $.$mol_jsx_view {
                task() { return new Task; }
                valueOf() {
                    return super.valueOf();
                }
                render() {
                    return $.$mol_jsx_make("div", null, this.task().title());
                }
            }
            __decorate([
                $.$mol_atom2_prop
            ], App.prototype, "task", null);
            __decorate([
                $.$mol_atom2_prop
            ], App.prototype, "valueOf", null);
            const task = new Task;
            $.$mol_atom2_autorun(() => $.$mol_jsx_attach(doc, () => $.$mol_jsx_make(App, { id: "/foo", task: () => task })));
            await $.$mol_fiber_warp();
            $.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">foo</body></html>');
            task.title('bar');
            await $.$mol_fiber_warp();
            $.$mol_assert_equal(doc.documentElement.outerHTML, '<html><body id="/foo">bar</body></html>');
        },
    });
})($ || ($ = {}));
//view.test.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_jsx_view extends $.$mol_object2 {
        static of(node) {
            return node[this];
        }
        valueOf() {
            const prefix = $.$mol_jsx_prefix;
            const booked = $.$mol_jsx_booked;
            const document = $.$mol_jsx_document;
            try {
                $.$mol_jsx_prefix = this[Symbol.toStringTag];
                $.$mol_jsx_booked = new Set;
                $.$mol_jsx_document = this.ownerDocument;
                return this.render();
            }
            finally {
                $.$mol_jsx_prefix = prefix;
                $.$mol_jsx_booked = booked;
                $.$mol_jsx_document = document;
            }
        }
        render() {
            return $.$mol_fail(new Error('dom_tree() not implemented'));
        }
    }
    $.$mol_jsx_view = $mol_jsx_view;
})($ || ($ = {}));
//view.js.map
//# sourceMappingURL=node.test.js.map